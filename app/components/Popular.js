let React = require('react');
let PropTypes = require('prop-types');
let api = require('../utils/api');

function SelecteLanguage(props){
    let languages = ['All', 'Javascript', 'Java', 'Python', 'CSS', 'Ruby'];
    return(
        <ul className="languages">
            {
            languages.map( (lang) => {
                return(
                        <li
                            style = { lang === props.selectedLanguage ? {color: '#d0021b'}: null}
                            onClick={props.onSelect.bind(null, lang)}
                            key={lang}
                        >
                            {lang}
                        </li>
                    )
                })
            }
        </ul>
    )
}


SelecteLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
            .then( (repos) => {
                this.setState( () => {
                    return {
                        repos: repos
                    }
                })
            })
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage);
    }

    render(){
        return(
            <div>
                <SelecteLanguage
                    selectedLanguage = {this.state.selectedLanguage}
                    onSelect = {this.updateLanguage}
                />
            </div>
        )
    }
}

module.exports = Popular;
