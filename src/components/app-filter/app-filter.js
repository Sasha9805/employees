import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThan1000', label: 'З/П больше 1000$'},
    ];
    const buttons = buttonsData.map(({ name, label }) => {
        const active = filter === name;
        const clazz = active ? ' btn-light' : ' btn-outline-light';
        return (
            <button 
                key={name}
                type="button"
                className={`btn${clazz}`}
                onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
    
};

export default AppFilter;