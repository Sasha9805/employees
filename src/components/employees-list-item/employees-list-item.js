import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        };
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase,
        }));
    };

    // Мое решение 1
    onLike = () => {
        this.setState(({ like }) => ({
            like: !like,
        }));
    };

    // Мое решение 2
    onChangeState = (field) => {
        this.setState((state) => ({
            [field]: !state[field],
        }));
    };

    render() {
        const { name, salary, onDelete } = this.props;
        const { increase, like } = this.state;

        // С урока
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (like) {
            classNames += ' like';
        }

        return (
            // Мое решение
            <li className={`list-group-item d-flex justify-content-between${increase ? ' increase' : ''}${like ? ' like' : ''}`}>
            {/* <li className={classNames}> */}
                {/* 1 */}
                {/* <span className="list-group-item-label" onClick={this.onLike}>{name}</span> */}
                {/* 2 */}
                <span className="list-group-item-label" onClick={this.onChangeState.bind(this, 'like')}>{name}</span>
                {/* Или */}
                {/* <span className="list-group-item-label" onClick={() => this.onChangeState('like')}>{name}</span> */}
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    {/* 1 */}
                    {/* <button type="button" className="btn-cookie btn-sm" onClick={this.onIncrease}> */}
                    {/* 2 */}
                    <button type="button" className="btn-cookie btn-sm" onClick={this.onChangeState.bind(this, 'increase')}>
                    {/* Или */}
                    {/* <button type="button" className="btn-cookie btn-sm" onClick={() => this.onChangeState('increase')}> */}
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
    
};

export default EmployeesListItem;