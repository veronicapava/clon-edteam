import Banner from "../Organisms/Banner"
import { connect } from "react-redux"
import store from "../../redux/store"
import { getAllPosts } from "../../redux/actionCreator"
import Publication from "../Organisms/Publication"
import { useEffect } from "react"


const Home = ({ posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])


  return (
    <>
      <Banner
        color="dark-color"
        image="https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        poster="https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Bienvenido a la experiencia más increible en educación online"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrarás."
        home
      />

      <main className="ed-grid m-grid-2">
        <div className="l-section m-cols-1">
          <h2>Últimas publicaciones</h2>
          {
            posts ?
              <div>
                {
                  posts.map(p =>
                    <Publication
                      image={p.image}
                      title={p.title}
                      author={p.author}
                      time={p.time}
                      content={p.content}
                      key={p.id}
                    />)
                }
              </div> :
              <p>No existen publicaciones</p>
          }
        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span>Programación desde cero</span></li>
            <li><span>HTML desde cero</span></li>
            <li><span>CSS desde cero</span></li>
            <li><span>JavaScript desde cero</span></li>
            <li><span>Programación orientada a objetos</span></li>
            <li><span>React desde cero</span></li>
            <li><span>Workshop con React</span></li>
            <li><span>Git desde cero</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})


export default connect(mapStateToProps, {})(Home)
