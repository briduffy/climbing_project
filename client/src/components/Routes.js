import React from 'react'
import axios from 'axios'
import {
  Header,
  Container,
  Table,
  Divider,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
// import InfiniteScroll from 'react-infinite-scroller'

// const styles = {
//   scroller: { height: '80vh', overflow: 'auto' },
//   container: { backgroundColor: 'white' },
// }

class Routes extends React.Component {
  state = {routes: [], page: 1, total_pages: 0 }

  componentDidMount(){
    axios.get('')
      .then( res => {
        this.setState({ routes: res.data })
      })
  }

  routes() {
    return this.state.routes.map( (routes, r) => {
      if (routes.routeId) {
        return (
        <Table.Body>
          <Table.Row>
            <Table.Cell>{r.name}</Table.Cell>
            <Table.Cell>{r.stars}</Table.Cell>
            <Table.Cell>{r.location}</Table.Cell>
          </Table.Row>
        </Table.Body>
        )
      }
    })
  }

  render() {
    return(
      <>
        <Divider hidden />
        <Container fluid>
          <Header textAlign='center'>All Routes</Header>
            <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Route</Table.HeaderCell>
                <Table.HeaderCell>Stars</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        </Container>
      </>
    )
  }
}

export default connect()(Routes)


