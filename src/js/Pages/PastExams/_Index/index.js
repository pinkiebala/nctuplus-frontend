
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from '../../../Components/Search'
import { PastExamsTable, PastExamsTableRow } from '../../../Components/PastExamsTable'
import { InputWithButton } from '../../../Components/FormUtils'

class Index extends React.Component {
  render () {
    return (
      <div className='page-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-3'>
              <SearchPanel>
                <InputWithButton
                  placeholder='課名/老師/檔名'
                  button_style='primary'
                  button_content={<i className='fa fa-search' />}
                />
                <SearchPanelButtonGroup
                  new_title='上傳考古題'
                  new_link='/past_exams/upload'
                  new_btn_type='info'
                  mine_title='我的考古題'
                  mine_link='/past_exams/?mine=true'
                  mine_btn_type='primary'
                />
                <SearchPanelCollegeList />
                <SearchPanelNewsFeed >
                  {
                    new Array(10).fill(0).map((value, index) => (
                      <SearchPanelNews key='index' href='/past_exams/123' >
                        24 天前 Guanxing Wu上傳了 基礎程式設計的考古題
                      </SearchPanelNews>
                      )
                    )
                  }
                </SearchPanelNewsFeed>
              </SearchPanel>
            </div>
            <div className='col-12 col-md-9'>
              <PastExamsTable>
                {
                  new Array(25).fill(0).map((value, index) => (
                    <PastExamsTableRow
                      id={777}
                      key={index}
                      course='邏輯與思維'
                      semester='100上'
                      teacher='趙敏芝'
                      filename='12463902_935600039865938_1080332131_n.jpg'
                      title='老師很認真'
                      user='匿名'
                    />
                    )
                  )
                }

              </PastExamsTable>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
