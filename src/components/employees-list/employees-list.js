import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {

    const elements = data.map(item => {
        const { id, ...rest } = item;
        return <EmployeesListItem 
                    key={id} 
                    {...rest}
                    onDelete={() => onDelete(id)} />;
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
    
};

export default EmployeesList;