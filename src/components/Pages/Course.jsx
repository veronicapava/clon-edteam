import { useEffect } from "react"
import { connect } from "react-redux"
import store from "../../redux/store"
import { getCourse } from "../../redux/actionCreator"
import Banner from "../Organisms/Banner"


const Course = ({ course }) => {

  useEffect(() => {
    store.dispatch(getCourse(2))
  }, {})

  return (
    <>
      {
        course &&
        <>
          <Banner
            color="dark-color"
            title={course.name}
            subtitle={course.subtitle}
            info={course.information}
            image={{
              src: "http://betabeers.com/uploads/blog/20170420_React_logo_wordmark.png",
              alt: course.name
            }}
            courseBanner
            poster={course.picture}
            especialidad={course.data.specialities[0].name}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4">¿Qué aprenderás?</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
                </div>
                <div>
                  <h3 className="t4">Cónocimientos previos</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.requirements }} />
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-5 s-radius s-bg-white l-block l-section s-shadow-bottom row-gap">
                {
                  course.data.classes.map(cl => (
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul>
                        {
                          cl.subjects.map(s => (
                            <li>{s.subject.title}</li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="lg-cols-3">
              <h3>Profesor:</h3>
              <p>Veronica Pava</p>
            </div>
          </main>
        </>
      }
    </>
  )

}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})


export default connect(mapStateToProps, {})(Course)
