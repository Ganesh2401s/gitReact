import PropTypes from "prop-types";
function StudentList (props) {
    const department = props.department;
    const yearOfAdmission = props.yearOfAdmission;
    const collegeName = props.collegeName;
    // Array of students
    const microStudents = ["Abhinav","Akriti Arya" ,"Anandita Srivastav","Archana Kumari","Deepanshu Sabharwal","Devanshi Yadav","Ganesh Singh","Harshit Matoliya","Harshit Saxena","Ishita","Jasmine Prasad","Kasturi Rashmi Basumatary","Lavneet Kataria","Mansi Sagar","Muskan Thapa","Nandini Das","Nikhil","Noora Sulaiman","Pranjal","Pratham Kumar Sah","Rhishav Basak","Rhitam Basak","Sakshi","Sana Alam","Sanskar Anand Singh","Saruchi Yadav","Sayan Mandal","Shivanshi Pandey","Shraddha Yadav","Soubhagya Sindhu","Spandan Chakroborty","Sugandha Kumari","Tanisha Das","Tanushka Chaudhary","Vanya Jain","Vinilda Vincent","Himanshu Kumar Yadav","Yathartha Singh","Himanshu Kumar","Sanjaya Srivastava","Krishna Parmar","Sandeep"];

    // microStudents.sort((a,b) => a.localeCompare(b))

    // eslint-disable-next-line react/jsx-key
    const list = microStudents.map((microStudent) => <tr>
        <td> {microStudent} </td>  
        <td>{department}</td> 
        <td>{yearOfAdmission}</td>  
        <td>{collegeName}</td> 
        </tr>)

    //defining datatypes of props
    StudentList.propTypes = {
        department : PropTypes.string,
        yearOfAdmission : PropTypes.number, 
        collegeName : PropTypes.string,
    }
    
    // defining defaultProps 
    StudentList.defaultProps = {
        departement : "Microbiology", 
        yearOfAdmission : "Not defined", 
        collegeName : "Bhaskaracharya College of Applied Sciences"
    };

    return (
          <div>
            <table border={2} className="microStudentTable">
                <thead>
                    <tr>
                        <th>Student Name </th>
                        <th>Department</th>
                        <th>Year of Admission</th>
                        <th> College Name</th>
                    </tr>
                </thead>
                <tbody>{list}</tbody>
            </table>
          </div>
    );
}

export default StudentList