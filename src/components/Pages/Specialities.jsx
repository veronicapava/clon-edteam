import Banner from "../Organisms/Banner"
import { useEffect } from "react"
import store from "../../redux/store"
import { getAllSpecialities } from "../../redux/actionCreator"
import { connect } from "react-redux"
import Card from "../Organisms/Card"

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])


  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
          alt: "Banner Especialidades"
        }}
        title="Especialidades"
        subtitle="Domina una tecnología con las rutas de aprendizaje que te ofrecemos"
      />
      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s => (
              <Card
                picture={s.picture}
                name={s.name}
                key={s.id}
                cardId={s.id}
                path="especialidades"

              />
            ))
          }
        </main>
      }




    </>
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})



export default connect(mapStateToProps)(Specialities)
