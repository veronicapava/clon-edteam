import Banner from "../Organisms/Banner"
import { useEffect } from "react"
import { getAllTeachers } from "../../redux/actionCreator"
import store from "../../redux/store"
import { connect } from "react-redux"
import Teacher from "../Organisms/Teacher"

const Teachers = ({ match, teachers }) => {

  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])


  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHRlYWNoZXJzJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          alt: "Banner profesores "
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente está altamente calificado para guiarte en tu educación."
      />
      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-grap">
          {
            teachers.map(t => (
              <Teacher
                key={t.id}
                picture={t.picture}
                name={t.name}
                country={t.country}
              />
            ))
          }
        </main>
      }
    </>

  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)
