import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import { getDetailAirline, updateAirline, updateLogo } from "../../redux/action/airline";

const UpdateAirlines = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [logo, setLogo] = useState('');
	const [changeImg, setChangeImg] = useState(false);

	useEffect(() => {
		const handleSuccess = (data) => {
			setName(data.data.data[0].name)
		}

		dispatch(getDetailAirline(id, handleSuccess))
	}, [])

	const onSubmit = (e) => {
		e.preventDefault();

		const body = {
			name: name,
		}

		const handleSuccess = (data) => {
			console.log(data)
		}

		dispatch(updateAirline(id, body, handleSuccess))

		if(changeImg){
			const form = new FormData();
			form.append('logo', logo)

			dispatch(updateLogo(id, form, handleSuccess))
		}

		alert('Airline updated');
		navigate('/admin/search-airlines/1')
	}

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position-relative start-50 translate-middle-x`}>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className={`text-center`}>
							<h1>Update Airlines</h1>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Airlines Name
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Garuda Indonesia"
								defaultValue={ name }
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formFile" className="form-label">
								Logo Airlines
							</label>
							<input className="form-control" type="file" id="formFile" onChange={(e) => {setLogo(e.target.files[0]); setChangeImg(true)}}/>
						</div>
						<input className="btn btn-primary" type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateAirlines;
