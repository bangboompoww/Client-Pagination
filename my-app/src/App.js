
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
				dataField: 'ID_WS',
				text: 'ID_WS',
        sort: true,
				  
				
			},

			{
				dataField: 'ID_STR_RT',
				text: 'ID_STR_RT',
        sort: true,
        filter: textFilter()

			},
			{
				dataField: 'DC_DY_BSN',
				text: 'DC_DY_BSN',
				sort: true
			},

			{
				dataField: 'AI_TRN',
				text: 'AI_TRN'
				
			},

			{
				dataField: 'TY_SND_CT',
				text: 'TY_SND_CT',
				sort : true
      },
      {
				dataField: 'ID_EM',
				text: 'ID_EM',
				sort : true
      },
      {
				dataField: 'ID_CT',
				text: 'ID_CT',
				sort : true
      },
      {
				dataField: 'MO_SLS_TOT',
				text: 'MO_SLS_TOT',
				sort : true
			},
		]
	};

	componentDidMount() {
		axios.get('http://frwsnodedev.us-east-1.elasticbeanstalk.com/transactions?fbclid=IwAR3NR5W7KjcAMHg2LzSa4r5JYKE5zoQT2Rm6dEJMFB-GDj47Jux3VpdQJWg').then((response) => {
			console.log(response.data);

			this.setState({
				theData: response.data
			});
		});
	}

	render() {
		return (
			<div className="container">
				<div class="row" className="hdr">
				</div>

				<div style={{ marginTop: 20 }}>
					<BootstrapTable
						striped
						hover
						keyField="id"
						data={this.state.theData}
						columns={this.state.columns}
            filter={ filterFactory() }
						pagination={paginationFactory()}
					/>
				</div>
			</div>
		);
	}
}

export default Table;
