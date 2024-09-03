// src/components/Pagination.js

import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <BootstrapPagination className="justify-content-center">
            <BootstrapPagination.Prev 
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} 
                disabled={currentPage === 1}
            />
            {[...Array(totalPages).keys()].map(number => (
                <BootstrapPagination.Item 
                    key={number + 1} 
                    active={number + 1 === currentPage}
                    onClick={() => handlePageChange(number + 1)}
                >
                    {number + 1}
                </BootstrapPagination.Item>
            ))}
            <BootstrapPagination.Next 
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} 
                disabled={currentPage === totalPages}
            />
        </BootstrapPagination>
    );
};

export default Pagination;
