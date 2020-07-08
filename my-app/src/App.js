import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Table extends Component {
	state = {
		theData: [],

		columns: [
			{
				dataField: 'id',
				text: 'id',
				sort: true
			},

			{
				dataField: 'quantity',
				text: 'quantity',
				sort: true
			},
			{
				dataField: 'itemDesc',
				text: 'itemDesc',
				sort: true
			},

			{
				dataField: 'SalesTotal',
				text: 'SalesTotal',
				filter: textFilter()
			},

			{
				dataField: 'Department',
				text: 'Department',
				sort: true
			}
		]
	};

	componentDidMount() {
		axios.get('http://localhost:3000/transaction')
			.then((response) => {
			console.log(response.data);

			this.setState({
				theData: response.data.data
			});
		});
	}

	render() {
		return (
			<div className="container">
				<div class="row" className="hdr" />

				<div style={{ marginTop: 20 }}>
					<BootstrapTable
						striped
						hover
						keyField="id"
						data={this.state.theData}
						columns={this.state.columns}
						filter={filterFactory()}
						pagination={paginationFactory()}
					/>
				</div>
			</div>
		);
	}
}

export default Table;
