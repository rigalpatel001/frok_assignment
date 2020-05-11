import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Fragment } from "react";
//import Signupform from "../components/Signupform";
import App from "../components/App";
import Header from "../components/Header";
import { freemem } from "os";
const GET_USERS = gql`
query users($limit: Int, $offset: Int) {
    users(limit: $limit, offset: $offset) {
            id
            email
            country {
                id
                name
            }
            city {
                id
                name
            }
            state {
                name
            }
            birthdate
            gender
            contactnumber
            skills
        }
    }
`;
const allUsersQueryVars = {
    offset: 0,
    limit: 2
};
class Userlist extends React.Component {
    render() {
        return (
            <Fragment>
                <App>
                    <Query
                        query={GET_USERS}
                        variables={allUsersQueryVars}
                        fetchPolicy="cache-and-network"
                        errorPolicy="ignore"
                    >
                        {({ loading, error, data: { users }, fetchMore }) => {
                            console.log(typeof users);
                            if (error) return <div>Something went wrong..</div>;
                            if (loading) return <div>Loading..</div>;
                            return (
                                <Fragment>
                                    <table className="blueTable">
                                        <tr>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Contact No</th>
                                            <th>Skills</th>
                                            <th>Date Of Birth</th>
                                        </tr>
                                        {users.map((userlist, index) => {
                                            return (
                                                <tr>
                                                    <th>{userlist.email}</th>
                                                    <th>{userlist.gender}</th>
                                                    <th>{userlist.country[0].name}</th>
                                                    <th>{userlist.skills}</th>
                                                    <th>{userlist.skills}</th>
                                                    <th>{userlist.contactnumber}</th>
                                                    <th>{userlist.skills}</th>
                                                    <th>{userlist.birthdate}</th>
                                                </tr>
                                            );
                                        })}
                                    </table>
                                    <input
                                        type="button"
                                        className="button"
                                        onClick={() => loadMoreUsers(users, fetchMore)}
                                        value="Load More"
                                    />
                                </Fragment>
                            );
                        }}
                    </Query>
                    <style jsx>{`
                        table.blueTable {
                            border: 1px solid #1C6EA4;
                            background-color: #EEEEEE;
                            width: 100%;
                            text-align: left;
                            border-collapse: collapse;
                        }
                        table.blueTable td,
                        table.blueTable th {
                            border: 1px solid #AAAAAA;
                            padding: 3px 2px;
                        }
                        table.blueTable tbody td {
                            font-size: 13px;
                        }
                        table.blueTable tr:nth-child(even) {
                            background: #D0E4F5;
                        }
                        table.blueTable thead {
                            background: #1C6EA4;
                            background: -moz-linear-gradient(
                                top,
                                #5592BB 0%,
                                #327CAD 66%,
                                #1C6EA4 100%
                            );
                            background: -webkit-linear-gradient(
                                top,
                                #5592BB 0%,
                                #327CAD 66%,
                                #1C6EA4 100%
                            );
                            background: linear-gradient(
                                to bottom,
                                #5592BB 0%,
                                #327CAD 66%,
                                #1C6EA4 100%
                            );
                            border-bottom: 2px solid #444444;
                        }
                        table.blueTable thead th {
                            font-size: 15px;
                            font-weight: bold;
                            color: #FFFFFF;
                            border-left: 2px solid #D0E4F5;
                        }
                        table.blueTable thead th:first-child {
                            border-left: none;
                        }
                        table.blueTable tfoot {
                            font-size: 14px;
                            font-weight: bold;
                            color: #FFFFFF;
                            background: #D0E4F5;
                            background: -moz-linear-gradient(
                                top,
                                #DCEBF7 0%,
                                #D4E6F6 66%,
                                #D0E4F5 100%
                            );
                            background: -webkit-linear-gradient(
                                top,
                                #DCEBF7 0%,
                                #D4E6F6 66%,
                                #D0E4F5 100%
                            );
                            background: linear-gradient(
                                to bottom,
                                #DCEBF7 0%,
                                #D4E6F6 66%,
                                #D0E4F5 100%
                            );
                            border-top: 2px solid #444444;
                        }
                        table.blueTable tfoot td {
                            font-size: 14px;
                        }
                        table.blueTable tfoot .links {
                            text-align: right;
                        }
                        table.blueTable tfoot .links a {
                            display: inline-block;
                            background: #1C6EA4;
                            color: #FFFFFF;
                            padding: 2px 8px;
                            border-radius: 5px;
                        }
                        .button {
                            padding: 10px 15px;
                            font-size: 12px;
                            text-align: center;
                            cursor: pointer;
                            outline: none;
                            color: #fff;
                            background-color: #4CAF50;
                            border: none;
                            border-radius: 15px;
                            box-shadow: 0 9px #999;
                            margin-top: 20px;
                        }
                        .button:hover {
                            background-color: #3E8E41;
                        }
                        .button:active {
                            background-color: #3E8E41;
                            box-shadow: 0 5px #666;
                            transform: translateY(4px);
                        }
                    `}</style>
                </App>
            </Fragment>
        );
    }
}
function loadMoreUsers(users, fetchMore) {
    fetchMore({
        variables: {
            offset: users.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
            console.log("New Result", fetchMore);
            console.log("Old Result", previousResult.users);
            if (!fetchMoreResult) {
                return previousResult;
            }
            return Object.assign({}, previousResult, {
                // Append the new posts results to the old one
                users: [...previousResult.users, ...fetchMoreResult.users]
            });
        }
    });
}
export default Userlist;