import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { getProgramme } from "../../Services/api";


const ListProgramme = () => {

    const [programme, setProgramme] = useState([]);

    const [message, setMessage] = useState();
    useEffect(() => {

        // récupérer les étudiants à partir de l'API
        getProgramme().then((values) => setProgramme(values.data));
    }, []);

    useEffect(() => {
        if (window.sessionStorage.getItem("notice")) {
            setMessage(window.sessionStorage.getItem("notice"));
    
            // supprimer le message en session
            window.sessionStorage.removeItem("notice");
    
            // faire disparaître le message après un délai en millisecondes
            setTimeout(() => setMessage(null), 5000);
        }
    });

    return (
        <>
            <p>{message}</p>
            <table>
				<thead>
					<tr>
						<td>Programme semaine 1</td>
						<td>Date de début</td>
						<td>Date de fin</td>
						<td>Association_id</td>
						<td>list_activiter</td>

					</tr>
				</thead>
                <tbody>
                    {programme.map((value) => (
                        <tr key={crypto.randomUUID()}>
                            <td>`${value.datestart}`</td>
                            <td>`${value.datefinish}`</td>
                            <td>`${value.firstname}`</td>
                            <td>`${value.association_id}`</td>
                            <td>`${value.list_activiter}`</td>
                        </tr>
                    ))}
                </tbody>
			</table>
            {/* <p>{message}</p>
            <h2>Liste des Programmes</h2>
            {programme.map((value) => (
                <>
                <p key={crypto.randomUUID()}>{value.datestart}</p>
                <p key={crypto.randomUUID()}>{value.firstname}</p>
                    <p key={crypto.randomUUID()}>{value.datefinish}</p>
                    <p key={crypto.randomUUID()}>{value.association_id}</p>
                    <p key={crypto.randomUUID()}>{ value.list_activiter}</p> */}
            {/* </> */}
            {/* ))} */}
        </>
    );
};

export default ListProgramme;