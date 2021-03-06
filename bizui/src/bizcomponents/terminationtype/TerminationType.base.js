import React from 'react'
import { Icon,Divider, Avata, Card, Col} from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList

const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderAvatarCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
	defaultSearchLocalData,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderAvatarCell=defaultRenderAvatarCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell



const menuData = {menuName: window.trans('termination_type'), menuFor: "terminationType",
  		subItems: [
  {name: 'terminationList', displayName: window.mtrans('termination','termination_type.termination_list',false), type:'termination',icon:'at',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  
  		],
}


const settingMenuData = {menuName: window.trans('termination_type'), menuFor: "terminationType",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: window.trans('termination_type.id'),
  code: window.trans('termination_type.code'),
  company: window.trans('termination_type.company'),
  baseDescription: window.trans('termination_type.base_description'),
  detailDescription: window.trans('termination_type.detail_description'),

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'terminationType') , sorter: true },
  { title: fieldLabels.code, debugtype: 'string', dataIndex: 'code', width: '11',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.company, dataIndex: 'company', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.baseDescription, debugtype: 'string', dataIndex: 'baseDescription', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.detailDescription, debugtype: 'string', dataIndex: 'detailDescription', width: '66',render: (text, record)=>renderTextCell(text,record)},

]


const searchLocalData =(targetObject,searchTerm)=> defaultSearchLocalData(menuData,targetObject,searchTerm)

const renderItemOfList=(terminationType, targetComponent, columCount)=>{
  const displayColumnsCount = columCount || 2
  const userContext = null
  return (
    <div key={terminationType.id}>
	
      <DescriptionList  key={terminationType.id} size="small" col="2" >
        <Description term={fieldLabels.id} style={{wordBreak: 'break-all'}}>{terminationType.id}</Description> 
        <Description term={fieldLabels.code} style={{wordBreak: 'break-all'}}>{terminationType.code}</Description> 
        <Description term={fieldLabels.baseDescription} style={{wordBreak: 'break-all'}}>{terminationType.baseDescription}</Description> 
        <Description term={fieldLabels.detailDescription} style={{wordBreak: 'break-all'}}>{terminationType.detailDescription}</Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {code, baseDescription, detailDescription, companyId} = formValuesToPack
	const company = {id: companyId, version: 2^31}
	const data = {code, baseDescription, detailDescription, company}
	return data
}
const unpackObjectToFormValues = ( objectToUnpack )=>{
	const {code, baseDescription, detailDescription, company} = objectToUnpack
	const companyId = company ? company.id : null
	const data = {code, baseDescription, detailDescription, companyId}
	return data
}
const stepOf=(targetComponent, title, content, position, index)=>{
	return {
		title,
		content,
		position,
		packFunction: packFormValuesToObject,
		unpackFunction: unpackObjectToFormValues,
		index,
      }
}
const TerminationTypeBase={menuData,displayColumns,fieldLabels,renderItemOfList, stepOf, searchLocalData}
export default TerminationTypeBase



