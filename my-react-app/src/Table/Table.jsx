import styles from './Table.module.css'


function Table () {
    return (
        <div className="tableContainer">
            <table border="2" className={styles.table}>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Player Name</th>
                        <th>Goals Scored</th>
                        <th>Assist</th>
                        <th> Trophies </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lionel Messi</td>
                        <td>300</td>
                        <td>255</td>
                        <td>155</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>Cristiano Ronaldo</td>
                        <td>356</td>
                        <td>150</td>
                        <td>105</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>Neymar Jr.</td>
                        <td>250</td>
                        <td>150</td>
                        <td>80</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>4</td>
                        <td>Haaland</td>
                        <td>300</td>
                        <td>100</td>
                        <td>56</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>5</td>
                        <td>Kylian Mbappe</td>
                        <td>350</td>
                        <td>200</td>
                        <td>70</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Table