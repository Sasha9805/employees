import { Component } from 'react';

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import SearchPanel from "../search-panel/search-panel";

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: true, id: 3},
            ]
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // 1-ый способ
            // const index = data.findIndex(item => item.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [
            //     ...before,
            //     ...after
            // ];

            // 2-ой способ
            return {
                data: data.filter(item => item.id !== id)
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        };
        this.setState(({ data }) => {
            return {
                data: [
                    ...data,
                    newItem
                ]
            };
        });
    };

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }

}

export default App;