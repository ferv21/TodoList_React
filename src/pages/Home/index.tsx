import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/Barralateral'
import ListaTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
