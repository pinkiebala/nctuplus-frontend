
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { InputWithButton } from '../FormUtils'
import './style.scss'

class SearchCourse extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      advanced: false,
      type: null,
      department: null
    }
  }
  render () {
    return (
      <div className='search-course'>
        <div className='d-inline-block vertical-center'>
          <InputWithButton
            className='search-bar'
            placeholder='課名/老師/時間/向度'
            button_style='primary'
            button_content={<i className='fa fa-search' />}
          />
        </div>
        <div className='d-inline-block vertical-center'>
          <div className='d-none d-inline-block checkbox'>
            <label>
              <input
                type='checkbox'
                checked={this.state.advanced}
                onChange={(e) => this.setState({ advanced: e.target.checked })}
              />進階搜尋
            </label>
          </div>
        </div>
        <div className={classNames('row', !this.state.advanced && 'd-none')} >
          {
            this.props.show_semester
            ? <div className='col-4 text-center no-padding-right'>
              <select className='form-control'>
                <option value=''>所有學期</option>

              </select>
            </div> : ''
          }
          <div
            className={`col-8 text-center ${this.props.show_semester ? 'no-padding-left' : 'no-padding-right'}`}
          >
            <select className='form-control'>
              <option value=''>分類</option>
              <option value='1'>大學部</option>
              <option value='2'>大學部共同</option>
              <option value='3'>研究所</option>
            </select>
          </div>
          <div
            className='col-12 text-center'
          >
            <select className='form-control' >
              <option value=''>系所</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

class SearchPanelNews extends React.Component {
  render () {
    return (
      <Link to={this.props.href} className='list-group-item list-group-item-success'>
        { this.props.children }
      </Link>
    )
  }
}

class SearchPanelNewsFeed extends React.Component {
  render () {
    return (
      <div>
        <h4 className='text-center d-none d-sm-block title'>最新動態</h4>
        <div className='row d-none d-sm-block'>
          <div className='list-group'>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

class SearchPanelCollegeList extends React.Component {
  render () {
    return (
      <div className='college-group'>
        <h4 className='text-center'>分類</h4>
        <button className='btn btn-default college' >共同課程</button>
        <button className='btn btn-default college' >資訊學院</button>
        <button className='btn btn-default college' >電機學院</button>
        <button className='btn btn-default college' >工學院</button>
        <button className='btn btn-default college' >理學院</button>
        <button className='btn btn-default college' >光電學院</button>
        <button className='btn btn-default college' >生科學院</button>
        <button className='btn btn-default college' >管理學院</button>
        <button className='btn btn-default college' >人社學院</button>
        <button className='btn btn-default college' >客家文化學院</button>
      </div>
    )
  }
}

class SearchPanelButtonGroup extends React.Component {
  render () {
    return (
      <div className='row mt-3'>
        <table className='table table-bordered text-center' >
          <tbody>
            <tr>
              <td>
                <Link
                  className={`btn btn-sm btn-${this.props.new_btn_type}`}
                  to={this.props.new_link}
                >
                  { this.props.new_title }
                </Link>
              </td>
              <td>
                <Link
                  className={`btn btn-sm btn-${this.props.mine_btn_type}`}
                  to={this.props.mine_link}
                >
                  { this.props.mine_title }
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

class SearchPanel extends React.Component {
  render () {
    return (
      <div className='search-panel'>
        { this.props.children }
      </div>
    )
  }
}

export {
  SearchCourse,
  SearchPanel,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed,
  SearchPanelButtonGroup
}
