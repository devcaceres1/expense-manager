import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap';
import MonthTabRouter from './MonthTabRouter';
import YearTabRouter from './YearTabRouter';

class MonthTabs extends React.Component {
	constructor() {
		super();
		this.state = { activeTab: '' };
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			activeTab: this.props.year + '-' + nextProps.monthlyActiveTab,
		});
	}
	handleSelect(selectedTab) {
		this.setState({
			activeTab: selectedTab,
		});
	}
	render() {
		return (
			<Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
				<Tab
					eventKey={this.props.year + '-All'}
					title={<MonthTabRouter tabId="All" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Jan'}
					title={<MonthTabRouter tabId="Jan" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Feb'}
					title={<MonthTabRouter tabId="Feb" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Mar'}
					title={<MonthTabRouter tabId="Mar" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Apr'}
					title={<MonthTabRouter tabId="Apr" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-May'}
					title={<MonthTabRouter tabId="May" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Jun'}
					title={<MonthTabRouter tabId="Jun" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Jul'}
					title={<MonthTabRouter tabId="Jul" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Aug'}
					title={<MonthTabRouter tabId="Aug" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Sep'}
					title={<MonthTabRouter tabId="Sep" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Oct'}
					title={<MonthTabRouter tabId="Oct" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Nov'}
					title={<MonthTabRouter tabId="Nov" year={this.props.year} />}
				></Tab>
				<Tab
					eventKey={this.props.year + '-Dec'}
					title={<MonthTabRouter tabId="Dec" year={this.props.year} />}
				></Tab>
			</Tabs>
		);
	}
}
export default MonthTabs;
