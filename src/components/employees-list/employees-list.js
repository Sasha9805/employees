import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(item => {
        const { id, ...rest } = item;
        return <EmployeesListItem 
                    key={id} 
                    {...rest}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.dataset.toggle)} />;
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
    
};

export default EmployeesList;