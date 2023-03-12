import { Component } from 'react';

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import SearchPanel from "../search-panel/search-panel";

import './app.css';

class App extends Component {

    state = {
        data: [
                {name: 'John C.', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all',
    };

    maxId = 4;

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
            rise: false,
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

    onToggleProp = (id, prop) => {
        // 1-ый способ
        // this.setState(({ data }) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem = {
        //         ...old,
        //         [prop]: !old[prop],
        //     };
        //     const newArr = [
        //         ...data.slice(0, index),
        //         newItem,
        //         ...data.slice(index + 1)
        //     ];

        //     return {
        //         data: newArr,
        //     };
        // });

        // 2-ой способ
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        [prop]: !item[prop],
                    };
                }
                return item;
            })
        }));
    };

    onChangeSalary = (id, salary) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            salary
                        };
                    }
                    return item;
                })
            };
        });
    };

    searchEmp = (items, term) => {
        if (!term.length) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter } = this.state;
        const employees = data.length;
        // Мое решение
        const increased = data.reduce((prev, curr) => prev + curr.increase, 0);
        // С урока
        // const increased = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                    employees={employees}
                    increased={increased} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }

}

export default App;