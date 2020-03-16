import React from "react";
import { Redirect } from "react-router-dom";

const LandingPage = ({ currentUser }) => (
	<div>
		{currentUser ? (
			<div className="main-page">
				<h1 className="main-page_title">Bienvenido al test de Uflix</h1>
				<section className="main-page_section">
					<p>
						Gracias por darme la oportunidad de presentar esta
						prueba tecnica; esto fue lo que aprendi:
					</p>
					<ul>
						<li>
							Log in, Register
							<p>
								En esta prueba, le volvi a dar una repasada de
								Firebase y me meti mas a fondo en los metodos
								CRUD de interactuar con su base de datos. Como
								trabajar con los Snapshots y Collections para
								crear un usuario y como guardar en la base de
								datos el usuario que solo es autenticado por
								google -Son cosas totalmente diferentes. Tambien
								reapase algunas cosas de React Router ya que eso
								es algo que es esencial para un buen desarrollo
								en React creando SPA's
							</p>
						</li>
						<li>
							Mapeo de la lista de alimentos
							<p>
								En esta prueba, aprendi a crear un modal sin
								librerias y hacerlo totalmente organico con
								React JS; guardar los datos de los alimentos en
								Firebase asi como tambien trabajar en crear una
								lista responsiva
							</p>
						</li>
						<li>
							Comunicacion con el API de BITCOIN
							<p>
								En esta parte algo que aprendi y que tenia
								tiempo de no hacer fue trabajar con chartjs y
								tambien como trabajar con la libreria de date
								picker actualizando la busqueda de las fechas en
								el consumo del servicio a la vez que trabajar
								con el API de bitcoin.
							</p>
						</li>
						<li>
							Librerias que utilize para esta prueba: ReactJS,
							React Router, Axios, ChartJS, ChartJS-2,
							React-Date-Picker, SASS Firebase. Trabaje con
							Flexbox en los elementos para hacerlo responsivo.
							Utilize un logotipo de Uflix como favico
						</li>
					</ul>
				</section>
			</div>
		) : (
			<Redirect to="sign_up" />
		)}
	</div>
);
export default LandingPage;
