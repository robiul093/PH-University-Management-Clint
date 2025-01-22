import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi"


export default function AcademicSemester() {

    const {data} = useGetAllSemesterQuery(undefined);
    console.log(data)
    
  return (
    <div>
      <h2>This is Academic Semester</h2>
    </div>
  )
}
