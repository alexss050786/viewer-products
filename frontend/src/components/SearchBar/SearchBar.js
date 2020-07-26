import React from 'react';
import { Form } from 'react-bootstrap';
import api from '../../services/api';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            searchText: ''
        }
    }

    async handleSearch(searchText) {
        this.setState({
            searchText
        })

        this._response = await api.get(this.props.route, {
            params: {
                search: searchText,
                order: this.props.order
            }
        })

        this.props.onSearch(this._response.data);
    }

    componentDidUpdate(prevProps) {
        if (this.props.order !== prevProps.order) {
            this.handleSearch(this.state.searchText)
        }
    }

    render() {
        return (
            <Form.Control
                style={{
                    maxWidth: "550px",
                }}
                className="text-center m-1"
                size="lg"
                type="text"
                placeholder={this.props.placeholder}
                value={this.state.searchText}
                onChange={e => this.handleSearch(e.target.value)}
            />
        )
    }
}

SearchBar.defaultProps = {
    order: "",
    placeholder: "Procurar..."
}

export default SearchBar;