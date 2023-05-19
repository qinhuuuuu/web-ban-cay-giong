import React from "react";
import {MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";

const Pagination = (data) => {
    return (
        <MDBPagination circle className={data.className} color='teal'>
            <MDBPageItem disabled>
                <MDBPageNav className="page-link">
                    <span>First</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
                <MDBPageNav className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
                <MDBPageNav className="page-link">
                    1
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav className="page-link">
                    2
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav className="page-link">
                    3
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav className="page-link">
                    4
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav className="page-link">
                    5
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav className="page-link">
                    &raquo;
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
                <MDBPageNav className="page-link">
                    Last
                </MDBPageNav>
            </MDBPageItem>
        </MDBPagination>
    )
}

export default Pagination;