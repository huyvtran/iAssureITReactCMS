import React,{Component}from 'react';
import './NationalAwards.css';
import axios from 'axios';

export default class NationalAwards extends Component{

    constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "<b>NATIONAL</b> AWARDS",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": "<span style='font-size:30px'><b>Lorem Ipsum </b> </span> is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages,<p style='margin-top:20px'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution Ipsum passages, and more recently with desktop publishing software </p>",
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/ecom11.png",
            "fgImage": "/images/00.png",
            "repeatedBlocks": [
                                
                                { 
                                    Title: "Sample 5", 
                                    SubTitle: "", 
                                    Image: "/images/4.png",
                                    Link: "", 
                                    Description: ""
                                }
            ],
            "bgVideo"				: "",
            "fgVideo"				: "",
            "blockGroup"			: "",
            "blockAppearOnPage"		: ""
          },
          blockID:"",
          block_id:""
        };   
      }
    componentDidMount(){
    /*console.log("==>",this.props.block_id);*/
              {
                 axios
                    .get('http://qaiassureitapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                    .then((response)=>{
                        if(response.data){
                            // console.log("ListofServices =",response.data);
                          this.setState({
                              blocks:response.data
                          });
                        }                  
                      })           
                    .catch(function(error){
                      console.log(error);
                  })
                }
          this.setState({
                    block_id:this.props.block_id
                  });
    }
    render(){
        return(
            <div className="Nawardswrapp">
                <div className="NawardsBgIMG"style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                     <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 awardwrapp">
                        <ul className="dashBoxNA">
                            <li className="NAdash1"></li>
                            <li className="NAdash2"></li>
                            <li className="NAdash3"></li> 
                        </ul>
                    </div> 
                 </div>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NAh1title">
                        <div className=" text-center">
                            <div className="nah1title00" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></div>
                        </div>
                   </div>

                </div>
                

            </div>
        )
    }
}