import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import MyButton from "../../utils/customButton.component";

class Monies extends Component {
	static defaultProps = {
		numberOfMonths: 1
	};
	constructor() {
		super();
		this.state = {
			chartData: {
				labels: [],
				datasets: [],
				options: {
					title: {
						display: true,
						text: "Bitcoin Price Index",
						fontSize: 25
					},
					legend: {
						display: true,
						position: "right",
						labels: {
							fontColor: "#333"
						},
						layout: {
							padding: {
								left: 50,
								right: 0,
								bottom: 0,
								top: 0
							}
						},
						tooltips: {
							enabled: true
						}
					}
				}
			},
			disclaimer: "",
			maxValue: 0,
			minValue: 0,
			from: undefined,
			to: undefined
		};
	}
	handleDayClick = (day, modifiers = {}) => {
		if (modifiers.disabled) {
			this.handleResetClick();
			return;
		}
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState({
			range,
			to: range.to,
			from: range.from
		});
		if (range.from && range.to !== undefined) {
			this.submitDates(range.from, range.to);
		}
	};

	handleResetClick = () => {
		this.setState({ from: undefined, to: undefined });
	};

	componentDidMount() {
		axios
			.get("http://api.coindesk.com/v1/bpi/historical/close.json ")
			.then(response => this.filterData(response.data))
			.catch(error => console.log(error));
	}
	submitDates = (from, to) => {
		let startDate = from.toISOString().split("T")[0];
		let endDate = to.toISOString().split("T")[0];
		axios
			.get(
				`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
			)
			.then(response => this.filterData(response.data))
			.catch(err => console.log("Error", err));
	};
	filterData = data => {
		const bitcoinDisclaimer = data.disclaimer;
		const historicalDates = Object.keys(data.bpi);
		const historicalPrices = Object.values(data.bpi).map(item =>
			item.toString()
		);
		const maxHistVal = Object.values(data.bpi).reduce((acc, val) =>
			Math.max(acc, val)
		);

		const minHistVal = Object.values(data.bpi).reduce((acc, val) =>
			Math.min(acc, val)
		);
		this.setState({
			chartData: {
				labels: historicalDates,
				datasets: [
					{
						label: "Bitcoin price index",
						data: historicalPrices,
						backgroundColor: "rgba(54, 162,235,0.6)"
					}
				]
			},
			disclaimer: bitcoinDisclaimer,
			maxValue: maxHistVal,
			minValue: minHistVal
		});
	};
	render() {
		const {
			chartData,
			disclaimer,
			from,
			to,
			maxValue,
			minValue
		} = this.state;
		const modifiers = { start: from, end: to };
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		};
		return (
			<div className="monies">
				<h1 className="monies-text">Challenge #3 - Bitcoin Chart</h1>
				<div className="calendars">
					<p>
						{!from && !to && "Please select the initial date."}
						{from && !to && "Please select the ending date."}
						{from &&
							to &&
							`Selected from ${from.toLocaleDateString(
								undefined,
								options
							)} to
							${to.toLocaleDateString(undefined, options)}`}
					</p>
					{from && to && (
						<MyButton onClick={this.handleResetClick}>
							Reset the dates
						</MyButton>
					)}
					<DayPicker
						className="Selectable"
						numberOfMonths={this.props.numberOfMonths}
						selectedDays={[from, { from, to }]}
						modifiers={modifiers}
						onDayClick={this.handleDayClick}
						disabledDays={[
							{ after: new Date() },
							{ daysOfWeek: [0, 6] }
						]}
						dayPickerProps={{
							showWeekNumbers: true,
							todayButton: "Today"
						}}
					/>
				</div>
				<div className="values">
					<div>
						<h3>Values</h3>
						<div>Max: &#36;{maxValue}USD</div>
						<div>Min: &#36;{minValue}USD</div>
					</div>
				</div>
				<Line data={chartData} options={chartData.options} />
				<div className="disclaimer">{disclaimer}</div>
			</div>
		);
	}
}

export default Monies;
/* BIT COIN API
	historical prices
	http://api.coindesk.com/v1/bpi/historical/close.json
	current
	https://api.coindesk.com/v1/bpi/currentprice.json
	We offer historical data from our Bitcoin Price Index through the following endpoint:
	https://api.coindesk.com/v1/bpi/historical/close.json
	By default, this will return the previous 31 days' worth of data. This endpoint accepts the following optional parameters:
	?index=[USD/CNY]
	The index to return data for. Defaults to USD.
	?currency=<VALUE>
	The currency to return the data in, specified in ISO 4217 format. Defaults to USD.
	?start=<VALUE>&end=<VALUE>
	Allows data to be returned for a specific date range. Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.
	?for=yesterday
	Specifying this will return a single value for the previous day. Overrides the start/end parameter.
*/
