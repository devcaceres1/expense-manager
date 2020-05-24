import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './components/Add';
import Update from './components/Update';
import Delete from './components/Delete';
import { Tab, Tabs } from 'react-bootstrap';
import YearTabRouter from './components/YearTabRouter';
import MonthTabs from './components/MonthTabs';

import './assests/styles/App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedMonth: 'All',
			selectedYear: 2020,
			data: [],
			activeTab: 2020,
		};
		this.getData = this.getData.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.history.location.search) {
			let search = nextProps.history.location.search;

			search = search.substring(1);

			let searchObject = JSON.parse(
				'{"' +
					decodeURI(search)
						.replace(/"/g, '\\"')
						.replace(/&/g, '","')
						.replace(/=/g, '":"') +
					'"}'
			);

			this.setState({ activeTab: parseInt(searchObject.year) });
			this.setState({ selectedYear: searchObject.year });
			this.setState({ selectedMonth: searchObject.month });

			this.getData(this, searchObject.year, searchObject.month);
		} else {
			this.getData(this, 2020, 'All');
		}
	}
	componentDidMount() {
		this.getData(this, 2020, 'All');
	}
	handleSelect(selectedTab) {
		this.setState({
			activeTab: selectedTab,
			selectedYear: selectedTab,
		});
	}
	getData(res, year, month) {
		axios
			.get('http://localhost:8080/expense/' + year + '/' + month)
			.then(function (response) {
				res.setState({ data: response.data });
				res.setState({ selectedYear: parseInt(year) });
				res.setState({ selectedMonth: month });
			});
	}
	render() {
		return (
			<div>
				<Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
					<Tab eventKey={2018} title={<YearTabRouter year="2018" />}>
						<MonthTabs
							year="2018"
							monthlyActiveTab={this.state.selectedMonth}
						/>
					</Tab>
					<Tab eventKey={2019} title={<YearTabRouter year="2019" />}>
						<MonthTabs
							year="2019"
							monthlyActiveTab={this.state.selectedMonth}
						/>
					</Tab>
					<Tab eventKey={2020} title={<YearTabRouter year="2020" />}>
						<MonthTabs
							year="2020"
							monthlyActiveTab={this.state.selectedMonth}
						/>
					</Tab>
					<Tab eventKey={2021} title={<YearTabRouter year="2021" />}>
						<MonthTabs
							year="2021"
							monthlyActiveTab={this.state.selectedMonth}
						/>
					</Tab>
					<Tab eventKey={2022} title={<YearTabRouter year="2022" />}>
						<MonthTabs
							year="2022"
							monthlyActiveTab={this.state.selectedMonth}
						/>
					</Tab>
				</Tabs>
				<Add
					selectedMonth={this.state.selectedMonth}
					selectedYear={this.state.selectedYear}
				/>
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th className="desc-col">Description</th>
							<th className="button-col">Amount</th>
							<th className="button-col">Month</th>
							<th className="button-col">Year</th>
							<th className="button-col">Update</th>
							<th className="button-col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((response) => {
							return (
								<tr>
									<td className="counterCell"></td>
									<td className="desc-col">{response.description}</td>
									<td className="button-col">{response.amount}</td>
									<td className="button-col">{response.month}</td>
									<td className="button-col">{response.year}</td>
									<td className="button-col">
										<Update expense={response} />
									</td>
									<td className="button-col">
										<Delete expense={response} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
