// pagination component
import React, { Component } from 'react';
import { useRouter } from 'next/router';

type Props = {
    total: number;
    limit: number;
    offset: number;
    components: JSX.Element[];
}

export default function Pagination({ total, limit, offset, components }: Props) {
    const router = useRouter();
    const pages = Math.ceil(total / limit);
    const currentPage = Number(router.query.page) || 1;
    const pagesArray = Array.from(Array(pages).keys());

    const handleClick = (page: number) => {
        router.push(`/?offset=${(page - 1) * limit}&limit=${limit}&page=${page}`);

        window.scrollTo(0, 0);
    }



    return (
        <div>
            <div>
                {components.slice(offset, offset + limit)}
            </div>
            <div>
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}>
                    Previous
                </button>

                {pagesArray.slice(currentPage - 3, currentPage + 2).map((page) => (
                    <button
                        key={page}
                        onClick={() => handleClick(page + 1)}
                        disabled={page === currentPage - 1}>
                        {page + 1}
                    </button>
                ))}

                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === pages}>
                    Next
                </button>

                <p>Page {currentPage} of {pages}</p>

            </div>
        </div>
    );
}