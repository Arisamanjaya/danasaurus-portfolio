import React from 'react'

const ExpTable = ({ year, place, role }) => {
    return (
        <table>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-between">
                <p className="text-sm lg:text-base font-medium text-primary-200 lg:text-start text-center content-center">
                    {year}
                </p>
                <h3 className="text-lg lg:text-xl font-semibold text-primary-500 text-center ">
                    {place}
                </h3>
                <p className="text-sm lg:text-base font-normal text-primary-500 lg:text-end text-center content-center">
                    {role}
                </p>
            </div>
        </table>
    );
}

export default ExpTable;