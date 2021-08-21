import { connect } from "react-redux"
import { getAllCourses } from "../../redux/actionCreator"
import store from "../../redux/store"
import Banner from "../Organisms/Banner"
import { useEffect } from 'react'
import Card from "../Organisms/Card"


const Courses = ({ courses, home }) => {


  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [])


  return (
    <>

      <Banner
        color="dark-color"
        image={{
          src: "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          alt: "Banner Cursos"
        }}
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
      />

      {
        courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(c => (
              <Card
                picture={c.picture}
                name={c.name}
                key={c.id}
                path="cursos"
                cardId={c.id}
              />
            ))
          }

        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
