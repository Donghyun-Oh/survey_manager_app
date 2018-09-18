import React, { Component } from 'react';

class Board extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>날짜</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>codechaser</td>
                            <td>2018-09-18</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>codechaser</td>
                            <td>2018-09-18</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>codechaser</td>
                            <td>2018-09-18</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <a className="btn btn-light">글쓰기</a>
                </div>

                <div className="">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Board;