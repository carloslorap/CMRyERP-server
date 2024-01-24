const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = "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";

const obtener_listas_contactos = async function (req, res) {
  if (req.user) {
    let apiInstance = new SibApiV3Sdk.ContactsApi();

    let opts = {
      limit: 10,
      offset: 0,
    };
    apiInstance.getLists(opts).then(
      (data) => {
        console.log(data);
        res.status(200).send({ data: data });
      },
      (error) => {
        console.error(error);
        res.status(200).send({ data: undefined, error: error.response.text });
      }
    );
  } else {
    res.status(404).send({ data: undefined, message: "NoToken" });
  }
};

const registrar_lista_contacto = async function (req, res) {
  if (req.user) {
    let data = req.body;

    let apiInstance = new SibApiV3Sdk.ContactsApi();

    let createList = new SibApiV3Sdk.CreateList();

    createList.name = data.titulo;
    createList.folderId = 1;

    apiInstance.createList(createList).then(
      (data) => {
        console.log(data);
        res.status(200).send({ data: data });
      },
      (error) => {
        console.error(error);
        res.status(200).send({ data: undefined, error: error.response.text });
      }
    );
  } else {
    res.status(404).send({ data: undefined, message: "NoToken" });
  }
};

const importar_contacto = async function (req, res) {
  if (req.user) {
    let data = req.body;

    let apiInstance = new SibApiV3Sdk.ContactsApi();

    let requestContactImport = new SibApiV3Sdk.RequestContactImport();

    let arr_list = [];
    arr_list.push(data.idList);

    requestContactImport.fileBody = data.str_import;
    requestContactImport.listIds = arr_list;
    requestContactImport.emailBlacklist = false;
    requestContactImport.smsBlacklist = false;
    requestContactImport.updateExistingContacts = true;
    requestContactImport.emptyContactsAttributes = false;

    apiInstance.importContacts(requestContactImport).then(
      function (data) {
        res.status(200).send({ data: data });
      },
      function (error) {
        console.error(error);
        res.status(200).send({ data: undefined, error: error.response.text });
      }
    );
  } else {
    res.status(404).send({ data: undefined, message: "NoToken" });
  }
};

const obtener_contactos_lista = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];
    let apiInstance = new SibApiV3Sdk.ContactsApi();

    let listId = id;

    let opts = {
      limit: 50,
      offset: 0,
    };
    apiInstance.getContactsFromList(listId, opts).then(
      function (data) {
        res.status(200).send({ data: data });
      },
      function (error) {
        res.status(200).send({ data: undefined, error: error.response.text });
      }
    );
  } else {
    res.status(404).send({ data: undefined, message: "NoToken" });
  }
};

const eliminar_lista_contacto = async function(req,res){
  if(req.user){

      let id = req.params['id'];

      let apiInstance = new SibApiV3Sdk.ContactsApi();

      let listId = id;

      apiInstance.deleteList(listId).then(function() {
          res.status(200).send({data:true});
      }, function(error) {
          res.status(200).send({data:undefined,error:error.response.text});
      });

  }else{
      res.status(403).send({data:undefined,message:'NoToken'});
  }
}

const obtener_campaigns = async function(req,res){
  if(req.user){
      let apiInstance = new SibApiV3Sdk.EmailCampaignsApi();

      let opts = { 
        'type': "classic",
        'limit': 50,
        'offset': 0
      };
      apiInstance.getEmailCampaigns(opts).then(function(data) {
          res.status(200).send({data:data});
      }, function(error) {
          res.status(200).send({data:undefined,error:error.response.text});
      });

  }else{
      res.status(403).send({data:undefined,message:'NoToken'});
  }
}

const crear_campaign = async function(req,res){
  if(req.user){
      let data = req.body;
      let apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
      let emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign(); 

      let arr_list =[];
      arr_list.push(parseInt(data.listid));

      console.log(arr_list);
      
      emailCampaigns = {
          tag: 'Practica',
          sender: {name: 'Carlos', email: 'carloslorapuma@gmail.com'}, 
          name: data.name,
          subject: data.subject,
          htmlContent: data.html_content,
          replyTo: 'carloslorapuma@gmail.com',
          recipients: {listIds:arr_list},
          inlineImageActivation: false,
          mirrorActive: false,
          recurring: false,
          type: 'classic',
      }
      apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
          res.status(200).send({data:data});
      }, function(error) {
          res.status(200).send({data:undefined,error:error.response.text});
      });
  }else{
      res.status(403).send({data:undefined,message:'NoToken'});
  }
}

const send_email_campaign = async function(req,res){
  if(req.user){
      let id = req.body.id;
      let apiInstance = new SibApiV3Sdk.EmailCampaignsApi();

      let campaignId = id;
      
      apiInstance.sendEmailCampaignNow(campaignId).then(function() {
          res.status(200).send({data:true});
      }, function(error) {
          res.status(200).send({data:undefined,error:error.response.text});
      });
  }else{
      res.status(403).send({data:undefined,message:'NoToken'});
  }
}


module.exports = {
  obtener_listas_contactos,
  registrar_lista_contacto,
  importar_contacto,
  obtener_contactos_lista,
  obtener_campaigns,
  crear_campaign,
  send_email_campaign
};
