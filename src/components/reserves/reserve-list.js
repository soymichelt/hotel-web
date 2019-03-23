import React from 'react'
import BasicDataTable from './../theme/table'

const List = (props) => {

    const {
        onDelete,
        onFilter,
        data,
        columns,
        orderByDefault,
    } = props

    return (
        <BasicDataTable
            title={'Listado de Reservaciones'}
            data={data}
            columns={columns}
            orderByDefault={orderByDefault}
            onDelete={onDelete}
            onFilter={onFilter}
        />
    )

}

export default List;