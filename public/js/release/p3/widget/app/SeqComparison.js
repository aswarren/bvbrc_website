require({cache:{
'url:p3/widget/app/templates/SeqComparison.html':"<form dojoAttachPoint=\"containerNode\" class=\"PanelForm App ${baseClass}\" dojoAttachEvent=\"onreset:_onReset,onsubmit:_onSubmit,onchange:validate\">\n  <div class=\"appTemplate\">\n    <div class=\"appTitle\">\n      <span class=\"breadcrumb\">Services</span>\n      <h3>${applicationLabel}\n        <div name=\"overview\" class=\"infobox iconbox infobutton dialoginfo\">\n          <i class=\"fa icon-info-circle fa\" title=\"click to open info dialog\"></i>\n        </div>\n        <div class=\"infobox iconbox tutorialButton tutorialInfo\">\n          <a href=\"${docsServiceURL}${tutorialLink}\" target=\"_blank\" ><i class=\"fa icon-books fa-1x\" title=\"click to open tutorial\"></i></a>\n        </div>\n        <div class=\"infobox iconbox videoButton videoInfo\">\n          <a href=\"${docsServiceURL}${videoLink}\" target=\"_blank\" ><i class=\"fa icon-play-circle fa-1x\" title=\"click to open the video tutorial\"></i></a>\n        </div>\n      </h3>\n      <p>${applicationDescription} For further explanation, please see <a href=\"${docsServiceURL}${applicationHelp}\" target=\"_blank\">${applicationLabel} Service User Guide</a>, <a href=\"${docsServiceURL}${tutorialLink}\" target=\"_blank\">Tutorial</a>, and <a href=\"${docsServiceURL}${videoLink}\" target=\"_blank\" >Instructional Video</a>.</p>\n    </div>\n    <div class=\"formFieldsContainer\">\n      <div style=\"display: none;\">\n        <input data-dojo-type=\"dijit/form/NumberTextBox\" value=\"0\" required=\"false\" data-dojo-attach-point=\"numgenomes\" data-dojo-props=\"constraints:{min:1,max:10},\" />\n        <input data-dojo-type=\"dijit/form/NumberTextBox\" value=\"0\" required=\"false\" data-dojo-attach-point=\"numref\" data-dojo-props=\"constraints:{min:0},\" />\n      </div>\n      <table class=\"assemblyblocks\">\n        <tr>\n          <td style=\"width:50%\">\n            <table>\n              <tr>\n                <td>\n                  <div class=\"appBox appShadow\">\n                    <div class=\"headerrow\">\n                      <div style=\"width:85%;display:inline-block;\">\n                        <label class=\"appBoxLabel\">Parameters</label>\n                        <div name=\"parameters\" class=\"infobox iconbox infobutton dialoginfo\">\n                          <i class=\"fa icon-info-circle fa\" title=\"click to open info dialog\"></i>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"appRow\">\n                      <div class=\"appRow\" data-dojo-attach-point=\"advanced\">\n                        <label>Advanced Parameters (optional)</label>\n                        <div class=\"iconbox\" style=\"margin-left:0px\">\n                          <i data-dojo-attach-point=\"advicon\" class=\"fa icon-caret-down fa-1\"></i>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"appRow\" data-dojo-attach-point=\"advrow\" style=\"display: none\">\n                      <div class=\"halfAppRow\">\n                        <label class=\"paramlabel\">Minimum %\n                          coverage</label><br>\n                        <div class=\"insertspinner\" name=\"min_seq_cov\" data-dojo-type=\"dijit/form/NumberSpinner\" value=\"30\" data-dojo-attach-point=\"insert_size_mean\" data-dojo-props=\"smallDelta:5, constraints:{min:10,max:100,places:0}\"></div>\n                      </div>\n                      <div class=\"half2AppRow\">\n                        <label class=\"paramlabel\">Blast E-value</label><br>\n                        <div data-dojo-type=\"dijit/form/ValidationTextBox\" name=\"max_e_val\" value=\"1e-5\" style=\"width:100%\" required=\"false\" data-dojo-props=\"intermediateChanges:true,promptMessage:'E value is optional, default is set to 1e-5',missingMessage:'E value is optional, default is set to 1e-5.',trim:true,placeHolder:'1e-5'\"></div>\n                      </div>\n                      <div class=\"halfAppRow\">\n                        <label class=\"paramlabel\">Minimum %\n                            identity</label><br>\n                        <div class=\"insertspinner\" name=\"min_ident\" data-dojo-type=\"dijit/form/NumberSpinner\" value=\"10\" data-dojo-attach-point=\"min_ident\" data-dojo-props=\"smallDelta:5, constraints:{min:10,max:100,places:0}\"></div>\n                      </div>\n                    </div>\n                    <div class=\"appRow\">\n                      <label class=\"paramlabel\">Output Folder</label><br>\n                      <div data-dojo-type=\"p3/widget/WorkspaceObjectSelector\" name=\"output_path\" data-dojo-attach-point=\"output_path\" required=\"true\" data-dojo-props=\"title:'Select an Output Folder',autoSelectCurrent:true,selectionText:'Destination',type:['folder'],multi:false\" data-dojo-attach-event=\"onChange:onOutputPathChange\"></div>\n                    </div>\n                    <div class=\"appRow\">\n                      <label class=\"paramlabel\">Output Name</label><span class=\"charError\" style=\"color:red; font-size:8pt; padding-left:10px; font-weight:bold\">&nbsp;</span><br>\n                      <div data-dojo-type=\"p3/widget/WorkspaceFilenameValidationTextBox\" data-dojo-attach-event=\"onChange:checkOutputName\" name=\"output_file\" data-dojo-attach-point=\"output_file\" style=\"width:85%\" required=\"true\" data-dojo-props=\"intermediateChanges:true,missingMessage:'Name must be provided for the job result',trim:true,placeHolder:'Output Name'\"></div>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"appBox appShadow\">\n                    <div class=\"headerrow\">\n                      <div style=\"width:85%;display:inline-block;\">\n                        <label class=\"appBoxLabel\">Reference Genome</label>\n                        <div name=\"reference-genome-selection\" class=\"infobox iconbox infobutton dialoginfo\">\n                          <i class=\"fa icon-info-circle fa\" title=\"click to open info dialog\"></i>\n                        </div>\n                        <br>\n                        <div class=\"appsublabel\">Select 1 reference genome from the following options.</div>\n                      </div>\n                    </div>\n                    <div class=\"appRow\">\n                      <label>Select a genome</label><br>\n                      <div data-dojo-attach-event=\"onChange:onSuggestNameChange\" data-dojo-type=\"p3/widget/GenomeNameSelector\" name=\"ref_genome_id\" maxHeight=\"200\" style=\"width:85%\" required=\"false\" data-dojo-attach-point=\"ref_genome_id\"></div>\n                      <br>\n                      <label>or a fasta file</label><br>\n                      <div data-dojo-attach-event=\"onChange:onSuggestNameChange\" data-dojo-type=\"p3/widget/WorkspaceObjectSelector\" name=\"ref_user_genomes_fasta\" style=\"width:100%\" required=\"false\" data-dojo-attach-point=\"ref_user_genomes_fasta\" data-dojo-props=\"type:['feature_protein_fasta'],multi:false,promptMessage:'Select or Upload protein fasta file to your workspace for Comparison',missingMessage:'User genome file is optional.', placeHolder:'Optional'\"></div>\n                      <label>or a feature group</label><br>\n                      <div data-dojo-attach-event=\"onChange:onSuggestNameChange\" data-dojo-type=\"p3/widget/WorkspaceObjectSelector\" name=\"ref_user_genomes_featuregroup\" style=\"width:100%\" required=\"false\" data-dojo-attach-point=\"ref_user_genomes_featuregroup\" data-dojo-props=\"type:['feature_group'],multi:false,promptMessage:'Select a feature group',missingMessage:'Feature group is optional.', placeHolder:'Optional'\"></div>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </table>\n          </td>\n          <td>\n            <div class=\"appBox appShadow\">\n              <div class=\"headerrow\">\n                <div style=\"width:85%;display:inline-block;\">\n                  <label class=\"appBoxLabel\">Comparison Genomes</label>\n                  <div name=\"comparison-genomes-selection\" class=\"infobox iconbox infobutton dialoginfo\">\n                    <i class=\"fa icon-info-circle fa\" title=\"click to open info dialog\"></i>\n                  </div>\n                </div>\n                <br>\n                <div class=\"appsublabel\">Add up to 9 genomes to compare (use plus buttons to add).</div>\n              </div>\n              <div class=\"appRow\">\n                <label>Select genome</label><br>\n                <div style=\"width:85%;display:inline-block;\" data-dojo-attach-event=\"onChange:onSuggestNameChange\" data-dojo-type=\"p3/widget/GenomeNameSelector\" name=\"comp_genome_id\" maxHeight=\"200\" required=\"false\" data-dojo-attach-point=\"comp_genome_id\"></div>\n                <div style=\"width:10%;display:inline-block;\"><i data-dojo-attach-event=\"click:onAddGenome\" class=\"fa icon-plus-circle fa-lg\"></i></div>\n                <br>\n                <label>And/or select protein fasta file</label><br>\n                <div style=\"width:85%;display:inline-block;\" data-dojo-type=\"p3/widget/WorkspaceObjectSelector\" name=\"user_genomes_fasta\" required=\"false\" data-dojo-attach-point=\"user_genomes_fasta\" data-dojo-props=\"type:['feature_protein_fasta'],multi:false,promptMessage:'Select or Upload protein fasta file to your workspace for Comparison',missingMessage:'User genome file is optional.', placeHolder:'Optional'\"></div>\n                <div style=\"width:10%;display:inline-block;\"><i data-dojo-attach-event=\"click:onAddFasta\" class=\"fa icon-plus-circle fa-lg\"></i>\n                </div>\n                <br>\n                <label>And/or select feature group</label><br>\n                <div style=\"width:85%;display:inline-block;\" data-dojo-type=\"p3/widget/WorkspaceObjectSelector\" name=\"user_genomes_featuregroup\" required=\"false\" data-dojo-attach-point=\"user_genomes_featuregroup\" data-dojo-props=\"type:['feature_group'],multi:false,promptMessage:'Select a feature group from your workspace for Comparison',missingMessage:'Feature group is optional.', placeHolder:'Optional'\"></div>\n                <div style=\"width:10%;display:inline-block;\"><i data-dojo-attach-event=\"click:onAddFeatureGroup\" class=\"fa icon-plus-circle fa-lg\"></i></div>\n                <br>\n                <label>And/or select genome group</label><br>\n                <div style=\"width:85%;display:inline-block;\" data-dojo-type=\"p3/widget/WorkspaceObjectSelector\" name=\"user_genomes_genomegroup\" required=\"false\" data-dojo-attach-point=\"user_genomes_genomegroup\" data-dojo-props=\"type:['genome_group'],multi:false,promptMessage:'Select a genome group from your workspace for Comparison',missingMessage:'Genome group is optional.', placeHolder:'Optional'\"></div>\n                <div style=\"width:10%;display:inline-block;\"><i data-dojo-attach-event=\"click:onAddGenomeGroup\" class=\"fa icon-plus-circle fa-lg\"></i></div>\n                <br>\n              </div>\n              <div class=\"appRow\">\n                <label> selected genome table</label>\n              </div>\n              <div class=\"appRow\" style=\"width:90%; margin-top:10px; text-align: center;\">\n                <table class=\"librarytable\" frame=\"box\" data-dojo-attach-point=\"genomeTable\" style=\"margin:0 0 0 10px; width:100%;\">\n                  <tbody data-dojo-attach-point=\"genomeTableBody\">\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div class=\"appSubmissionArea\">\n    <div data-dojo-attach-point=\"workingMessage\" class=\"messageContainer workingMessage\" style=\"margin-top:10px; text-align:center;\">\n      Comparing Genomes\n    </div>\n    <div data-dojo-attach-point=\"errorMessage\" class=\"messageContainer errorMessage\" style=\"margin-top:10px; text-align:center;\">\n      Error Submitting Job. Please check the submission form and make sure that ONE reference genome is selected.\n    </div>\n    <div data-dojo-attach-point=\"submittedMessage\" class=\"messageContainer submittedMessage\" style=\"margin-top:10px; text-align:center;\">\n      Proteome Comparison should be finished shortly. Check workspace for results.\n    </div>\n    <div style=\"margin-top: 10px; text-align:center;\">\n      <div data-dojo-attach-point=\"resetButton\" type=\"reset\" data-dojo-type=\"dijit/form/Button\">Reset</div>\n      <div data-dojo-attach-point=\"submitButton\" type=\"submit\" data-dojo-type=\"dijit/form/Button\">Submit</div>\n    </div>\n  </div>\n</form>\n"}});
define("p3/widget/app/SeqComparison", [
  'dojo/_base/declare', 'dijit/_WidgetBase', 'dojo/on',
  'dojo/dom-class',
  'dojo/text!./templates/SeqComparison.html', './AppBase', 'dojo/dom-construct', 'dijit/registry',
  'dojo/_base/Deferred', 'dojo/aspect', 'dojo/_base/lang', 'dojo/domReady!', 'dijit/form/NumberTextBox',
  'dojo/query', 'dojo/dom', 'dijit/popup', 'dijit/Tooltip', 'dijit/Dialog', 'dijit/TooltipDialog',
  'dojo/NodeList-traverse', '../../WorkspaceManager', 'dojo/store/Memory', 'dojox/widget/Standby', 'dojo/when'
], function (
  declare, WidgetBase, on,
  domClass,
  Template, AppBase, domConstruct, registry,
  Deferred, aspect, lang, domReady, NumberTextBox,
  query, dom, popup, Tooltip, Dialog, TooltipDialog,
  children, WorkspaceManager, Memory, Standby, when
) {
  return declare([AppBase], {
    baseClass: 'App Assembly',
    templateString: Template,
    applicationName: 'GenomeComparison',
    requireAuth: true,
    applicationLabel: 'Proteome Comparison',
    applicationDescription: 'The Proteome Comparison Service performs protein sequence-based genome comparison using bidirectional BLASTP. This service allows users to select genomes and compare them to reference genome.',
    applicationHelp: 'user_guides/services/proteome_comparison_service.html',
    tutorialLink: 'tutorial/proteome_comparison/proteome_comparison.html',
    videoLink: '/videos/proteome_comparison_service.html',
    pageTitle: 'Proteome Comparison',
    defaultPath: '',
    startingRows: 9,
    maxGenomes: 9,

    constructor: function () {
      this._selfSet = true;
      this.addedGenomes = 0;
      this.genomeToAttachPt = ['comp_genome_id'];
      this.fastaToAttachPt = ['user_genomes_fasta'];
      this.featureGroupToAttachPt = ['user_genomes_featuregroup'];
      this.genomeGroupToAttachPt = ['user_genomes_genomegroup'];
      this.userGenomeList = [];
      this.numref = 0;
    },

    startup: function () {
      var _self = this;
      if (this._started) {
        return;
      }
      if (this.requireAuth && (window.App.authorizationToken === null || window.App.authorizationToken === undefined)) {
        return;
      }
      this.inherited(arguments);

      _self.defaultPath = WorkspaceManager.getDefaultFolder() || _self.activeWorkspacePath;
      _self.output_path.set('value', _self.defaultPath);

      this.numref = 0;
      this.emptyTable(this.genomeTable, this.startingRows);
      this.numgenomes.startup();
      this.advrow.turnedOn = (this.advrow.style.display != 'none');
      on(this.advanced, 'click', lang.hitch(this, function () {
        this.advrow.turnedOn = (this.advrow.style.display != 'none');
        if (!this.advrow.turnedOn) {
          this.advrow.turnedOn = true;
          this.advrow.style.display = 'block';
          this.advicon.className = 'fa icon-caret-left fa-1';
        }
        else {
          this.advrow.turnedOn = false;
          this.advrow.style.display = 'none';
          this.advicon.className = 'fa icon-caret-down fa-1';
        }
      }));
      this._started = true;
    },

    emptyTable: function (target, rowLimit) {
      for (var i = 0; i < rowLimit; i++) {
        var tr = target.insertRow(0);// domConstr.create("tr",{},this.genomeTableBody);
        domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, tr);
        domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, tr);
        domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, tr);
      }
    },

    checkDuplicate: function (cur_value, attachType) {
      var success = 1;
      var genomeIds = [];
      var genomeList = query('.genomedata');
      genomeList.forEach(function (item) {
        genomeIds.push(item.genomeRecord[attachType]);
      });
      if (genomeIds.length > 0 && genomeIds.indexOf(cur_value) > -1) { // found duplicate
        success = 0;
      }
      return success;
    },

    ingestAttachPoints: function (input_pts, target, req) {
      req = typeof req !== 'undefined' ? req : true;
      var success = 1;
      input_pts.forEach(function (attachname) {
        var cur_value = null;
        var incomplete = 0;
        var browser_select = 0;
        if (attachname == 'output_path' || attachname == 'ref_user_genomes_fasta' || attachname == 'ref_user_genomes_featuregroup') {
          cur_value = this[attachname].searchBox.value;// ? "/_uuid/"+this[attachname].searchBox.value : "";
          browser_select = 1;
        }
        else if (attachname == 'user_genomes_fasta') {
          cur_value = this[attachname].searchBox.value;// ? "/_uuid/"+this[attachname].searchBox.value : "";
          var compGenomeList = query('.genomedata');
          var genomeIds = [];

          compGenomeList.forEach(function (item) {
            genomeIds.push(item.genomeRecord.user_genomes_fasta);
          });

          if (genomeIds.length > 0 && genomeIds.indexOf(cur_value) > -1)  // no same genome ids are allowed
          {
            success = 0;
          }
        }
        else if (attachname == 'user_genomes_featuregroup') {
          cur_value = this[attachname].searchBox.value;// ? "/_uuid/"+this[attachname].searchBox.value : "";
          var compGenomeList = query('.genomedata');
          var genomeIds = [];

          compGenomeList.forEach(function (item) {
            genomeIds.push(item.genomeRecord.user_genomes_featuregroup);
          });

          if (genomeIds.length > 0 && genomeIds.indexOf(cur_value) > -1)  // no same genome ids are allowed
          {
            success = 0;
          }
        }
        else if (attachname == 'comp_genome_id') {
          var compGenomeList = query('.genomedata');
          var genomeIds = [];

          compGenomeList.forEach(function (item) {
            genomeIds.push(item.genomeRecord.comp_genome_id);
          });

          cur_value = this[attachname].value;

          // console.log("genomeIds = " + genomeIds + " cur_value = " + cur_value + " index = " +genomeIds.indexOf(cur_value));
          if (genomeIds.length > 0 && genomeIds.indexOf(cur_value) > -1)  // no same genome ids are allowed
          {
            success = 0;
          }
        }
        else if (attachname == 'user_genomes_genomegroup') {
          cur_value = this[attachname].searchBox.value;
          var duplicate = this.checkDuplicate(cur_value, 'user_genomes_genomegroup');
          success *= duplicate;
        }
        else {
          cur_value = this[attachname].value;
        }

        // console.log("cur_value=" + cur_value);

        if (typeof (cur_value) == 'string') {
          target[attachname] = cur_value.trim();
        }
        else {
          target[attachname] = cur_value;
        }
        if (req && (!target[attachname] || incomplete)) {
          if (browser_select) {
            this[attachname].searchBox.validate(); // this should be whats done but it doesn't actually call the new validator
            this[attachname].searchBox._set('state', 'Error');
            this[attachname].focus = true;
          }
          success = 0;
        }
        else {
          this[attachname]._set('state', '');
        }
        if (target[attachname] != '') {
          target[attachname] = target[attachname] || undefined;
        }
        else if (target[attachname] == 'true') {
          target[attachname] = true;
        }
        else if (target[attachname] == 'false') {
          target[attachname] = false;
        }
      }, this);
      return (success);
    },

    onSuggestNameChange: function () {
      if (this.ref_genome_id.get('value') || this.ref_user_genomes_fasta.get('value') || this.ref_user_genomes_featuregroup.get('value')) {
        this.numref = 1;
      } else {
        this.numref = 0;
      }
      // console.log("change genome name, this.numref=", this.numref, "this.ref_genome_id.get('value')=", this.ref_genome_id.get('value'));
    },

    makeGenomeName: function () {
      var name = this.comp_genome_id.get('displayedValue');
      var maxName = 36;
      var display_name = name;
      if (name.length > maxName) {
        display_name = name.substr(0, (maxName / 2) - 2) + '...' + name.substr((name.length - (maxName / 2)) + 2);
      }

      return display_name;
    },

    makeFastaName: function () {
      var name = this.user_genomes_fasta.searchBox.get('displayedValue');
      var maxName = 36;
      var display_name = name;

      if (name.length > maxName) {
        display_name = name.substr(0, (maxName / 2) - 2) + '...' + name.substr((name.length - (maxName / 2)) + 2);
      }

      return display_name;
    },

    makeFeatureGroupName: function () {
      var name = this.user_genomes_featuregroup.searchBox.get('displayedValue');
      var maxName = 36;
      var display_name = name;
      // console.log("this.user_genomes_featuregroup name = " + this.name);

      if (name.length > maxName) {
        display_name = name.substr(0, (maxName / 2) - 2) + '...' + name.substr((name.length - (maxName / 2)) + 2);
      }

      return display_name;
    },

    makeGenomeGroupName: function (newGenomeIds) {
      var name = this[this.genomeGroupToAttachPt].searchBox.get('displayedValue');
      var maxName = 36;
      var display_name = name;
      if (name.length > maxName) {
        display_name = name.substr(0, (maxName / 2) - 2) + '...' + name.substr((name.length - (maxName / 2)) + 2);
      }

      return display_name;
    },

    increaseGenome: function (genomeType, newGenomeIds) {
      if (genomeType == 'genome' || genomeType == 'genome_group') {
        newGenomeIds.forEach(lang.hitch(this, function (id) {
          this.userGenomeList.push(id);
        }));
        this.addedGenomes = this.addedGenomes + newGenomeIds.length;
        this.numgenomes.set('value', Number(this.addedGenomes));
      } else {
        this.addedGenomes = this.addedGenomes + 1;
        this.numgenomes.set('value', Number(this.addedGenomes));
      }
      // console.log("increase this.userGenomeList = " + this.userGenomeList);
    },

    decreaseGenome: function (genomeType, newGenomeIds) {
      if (genomeType == 'genome' || genomeType == 'genome_group') {
        newGenomeIds.forEach(lang.hitch(this, function (id) {
          var idx = this.userGenomeList.indexOf(id);
          if (idx > -1) {
            this.userGenomeList.splice(idx, 1);
          }
        }));
        this.addedGenomes = this.addedGenomes - newGenomeIds.length;
        this.numgenomes.set('value', Number(this.addedGenomes));
      } else {
        this.addedGenomes = this.addedGenomes - 1;
        this.numgenomes.set('value', Number(this.addedGenomes));
      }
      // console.log("decrease this.userGenomeList = " + this.userGenomeList);
    },

    onAddGenome: function () {
      // console.log("Create New Row", domConstruct);
      var lrec = {};
      var chkPassed = this.ingestAttachPoints(this.genomeToAttachPt, lrec);
      // console.log("this.genomeToAttachPt = " + this.genomeToAttachPt);
      // console.log("chkPassed = " + chkPassed + " lrec = " + lrec);
      if (chkPassed && this.addedGenomes < this.maxGenomes) {
        var newGenomeIds = [lrec[this.genomeToAttachPt]];
        var tr = this.genomeTable.insertRow(0);
        var td = domConstruct.create('td', { 'class': 'textcol genomedata', innerHTML: '' }, tr);
        td.genomeRecord = lrec;
        td.innerHTML = "<div class='libraryrow'>" + this.makeGenomeName() + '</div>';
        domConstruct.create('td', { innerHTML: '' }, tr);
        var td2 = domConstruct.create('td', { innerHTML: "<i class='fa icon-x fa-1x' />" }, tr);
        if (this.addedGenomes < this.startingRows) {
          this.genomeTable.deleteRow(-1);
        }
        var handle = on(td2, 'click', lang.hitch(this, function (evt) {
          // console.log("Delete Row");
          domConstruct.destroy(tr);
          this.decreaseGenome('genome', newGenomeIds);
          if (this.addedGenomes < this.startingRows) {
            var ntr = this.genomeTable.insertRow(-1);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
          }
          handle.remove();
        }));
        this.increaseGenome('genome', newGenomeIds);
      }
      // console.log(lrec);
    },

    onAddFasta: function () {
      // console.log("Create New Row", domConstruct);
      var lrec = {};
      var chkPassed = this.ingestAttachPoints(this.fastaToAttachPt, lrec);
      // console.log("this.fastaToAttachPt = " + this.fastaToAttachPt);
      // console.log("chkPassed = " + chkPassed + " lrec = " + lrec);
      if (chkPassed && this.addedGenomes < this.maxGenomes) {
        var newGenomeIds = [lrec[this.fastaToAttachPt]];
        var tr = this.genomeTable.insertRow(0);
        var td = domConstruct.create('td', { 'class': 'textcol genomedata', innerHTML: '' }, tr);
        td.genomeRecord = lrec;
        td.innerHTML = "<div class='libraryrow'>" + this.makeFastaName() + '</div>';
        domConstruct.create('td', { innerHTML: '' }, tr);
        var td2 = domConstruct.create('td', { innerHTML: "<i class='fa icon-x fa-1x' />" }, tr);
        if (this.addedGenomes < this.startingRows) {
          this.genomeTable.deleteRow(-1);
        }
        var handle = on(td2, 'click', lang.hitch(this, function (evt) {
          // console.log("Delete Row");
          domConstruct.destroy(tr);
          this.decreaseGenome('fasta', newGenomeIds);
          if (this.addedGenomes < this.startingRows) {
            var ntr = this.genomeTable.insertRow(-1);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
          }
          handle.remove();
        }));
        this.increaseGenome('fasta', newGenomeIds);
      }
      // console.log(lrec);
    },

    onAddFeatureGroup: function () {
      console.log('Create New Row', domConstruct);
      var lrec = {};
      var chkPassed = this.ingestAttachPoints(this.featureGroupToAttachPt, lrec);
      // console.log("this.featureGroupToAttachPt = " + this.featureGroupToAttachPt);
      // console.log("chkPassed = " + chkPassed + " lrec = " + lrec);
      if (chkPassed && this.addedGenomes < this.maxGenomes) {
        var newGenomeIds = [lrec[this.featureGroupToAttachPt]];
        var tr = this.genomeTable.insertRow(0);
        var td = domConstruct.create('td', { 'class': 'textcol genomedata', innerHTML: '' }, tr);
        td.genomeRecord = lrec;
        td.innerHTML = "<div class='libraryrow'>" + this.makeFeatureGroupName() + '</div>';
        domConstruct.create('td', { innerHTML: '' }, tr);
        var td2 = domConstruct.create('td', { innerHTML: "<i class='fa icon-x fa-1x' />" }, tr);
        if (this.addedGenomes < this.startingRows) {
          this.genomeTable.deleteRow(-1);
        }
        var handle = on(td2, 'click', lang.hitch(this, function (evt) {
          // console.log("Delete Row");
          domConstruct.destroy(tr);
          this.decreaseGenome('feature_group', newGenomeIds);
          if (this.addedGenomes < this.startingRows) {
            var ntr = this.genomeTable.insertRow(-1);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
            domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
          }
          handle.remove();
        }));
        this.increaseGenome('feature_group', newGenomeIds);
      }
      // console.log(lrec);
    },

    // implement adding a genome group
    onAddGenomeGroup: function () {
      var lrec = {};
      var chkPassed = this.ingestAttachPoints(this.genomeGroupToAttachPt, lrec);
      // console.log("this.genomeGroupToAttachPt = " + this.genomeGroupToAttachPt);
      // console.log("chkPassed = " + chkPassed + " lrec = " + lrec);
      var path = lrec[this.genomeGroupToAttachPt];
      var newGenomeIds = [];
      when(WorkspaceManager.getObject(path), lang.hitch(this, function (res) {
        if (typeof res.data == 'string') {
          res.data = JSON.parse(res.data);
        }
        if (res && res.data && res.data.id_list) {
          if (res.data.id_list.genome_id) {
            newGenomeIds =  res.data.id_list.genome_id;
          }
        }
        // display a notice if adding new genome group exceeds maximum allowed number
        var count = this.addedGenomes + newGenomeIds.length;
        if (count > this.maxGenomes) {
          var msg = 'Sorry, you can only add up to ' + this.maxGenomes + ' genomes';
          msg += ' and you are trying to select ' + count + '.';
          new Dialog({ title: 'Notice', content: msg }).show();
        }
        // console.log("newGenomeIds = ", newGenomeIds);

        if (chkPassed && this.addedGenomes < this.maxGenomes
          && newGenomeIds.length > 0
          && count <= this.maxGenomes)
        {
          var tr = this.genomeTable.insertRow(0);
          var td = domConstruct.create('td', { 'class': 'textcol genomedata', innerHTML: '' }, tr);
          td.genomeRecord = lrec;
          td.innerHTML = "<div class='libraryrow'>" + this.makeGenomeGroupName() + '</div>';
          domConstruct.create('td', { innerHTML: '' }, tr);
          var td2 = domConstruct.create('td', { innerHTML: "<i class='fa icon-x fa-1x' />" }, tr);
          if (this.addedGenomes < this.startingRows) {
            this.genomeTable.deleteRow(-1);
          }
          var handle = on(td2, 'click', lang.hitch(this, function (evt) {
            // console.log("Delete Row");
            domConstruct.destroy(tr);
            this.decreaseGenome('genome_group', newGenomeIds);
            if (this.addedGenomes < this.startingRows) {
              var ntr = this.genomeTable.insertRow(-1);
              domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
              domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
              domConstruct.create('td', { innerHTML: "<div class='emptyrow'></div>" }, ntr);
            }
            handle.remove();
          }));
          this.increaseGenome('genome_group', newGenomeIds);
        }
      }));

      // console.log(lrec);
    },

    onSubmit: function (evt) {
      var _self = this;

      evt.preventDefault();
      evt.stopPropagation();
      if (this.validate()) {
        var values = this.getValues();
        // console.log("user_genomes ", values["user_genomes"]);
        // console.log("user_feature_groups ", values["user_feature_groups"]);
        // console.log("genome_ids ", values["genome_ids"]);
        // console.log("reference_genome_index ", values["reference_genome_index"]);
        var numUserGenome = 0;

        if (values.user_genomes) {
          numUserGenome += values.user_genomes.length;
        }
        if (values.user_feature_groups) {
          numUserGenome += values.user_feature_groups.length;
        }
        if (values.genome_ids) {
          numUserGenome += values.genome_ids.length;
        }

        if (numUserGenome > 1 && values.reference_genome_index > 0) {
          domClass.add(this.domNode, 'Working');
          domClass.remove(this.domNode, 'Error');
          domClass.remove(this.domNode, 'Submitted');

          if (window.App.noJobSubmission) {
            var dlg = new Dialog({
              title: 'Job Submission Params: ',
              content: '<pre>' + JSON.stringify(values, null, 4) + '</pre>'
            });
            dlg.startup();
            dlg.show();
            return;
          }
          this.submitButton.set('disabled', true);
          window.App.api.service('AppService.start_app', [this.applicationName, values]).then(function (results) {
            // console.log("Job Submission Results: ", results);
            domClass.remove(_self.domNode, 'Working');
            domClass.add(_self.domNode, 'Submitted');
            _self.submitButton.set('disabled', false);
            registry.byClass('p3.widget.WorkspaceFilenameValidationTextBox').forEach(function (obj) {
              obj.reset();
            });
          }, function (err) {
            // console.log("Error:", err)
            domClass.remove(_self.domNode, 'Working');
            domClass.add(_self.domNode, 'Error');
            _self.errorMessage.innerHTML = err;
          });
        } else {
          domClass.add(this.domNode, 'Error');
          // console.log("Form is incomplete");
        }

      } else {
        domClass.add(this.domNode, 'Error');
        // console.log("Form is incomplete");
      }
    },

    getValues: function () {
      var seqcomp_values = {};
      var values = this.inherited(arguments);
      var compGenomeList = query('.genomedata');
      var genomeIds = [];
      var userGenomes = [];
      var featureGroups = [];
      var refType = '';
      var refIndex = 0;

      if (values.ref_genome_id) {
        refType = 'ref_genome_id';
        genomeIds.push(values.ref_genome_id);
      }
      else if (values.ref_user_genomes_fasta) {
        refType = 'ref_user_genomes_fasta';
        userGenomes.push(values.ref_user_genomes_fasta);
      }
      else if (values.ref_user_genomes_featuregroup) {
        refType = 'ref_user_genomes_featuregroup';
        featureGroups.push(values.ref_user_genomes_featuregroup);
      }

      this.userGenomeList.forEach(lang.hitch(this, function (id) {
        genomeIds.push(id);
      }));

      compGenomeList.forEach(function (item) {
        if (item.genomeRecord.user_genomes_fasta) {
          userGenomes.push(item.genomeRecord.user_genomes_fasta);
        }
      });

      compGenomeList.forEach(function (item) {
        if (item.genomeRecord.user_genomes_featuregroup) {
          featureGroups.push(item.genomeRecord.user_genomes_featuregroup);
        }
      });

      // console.log("compGenomeList = " + compGenomeList);
      // console.log("ref genome = " + values["ref_genome_id"]);

      seqcomp_values.genome_ids = genomeIds;
      if (userGenomes.length > 0) {
        seqcomp_values.user_genomes = userGenomes;
      }

      if (featureGroups.length > 0) {
        seqcomp_values.user_feature_groups = featureGroups;
      }

      if (refType == 'ref_genome_id') {
        refIndex = 1;
      }
      else if (refType == 'ref_user_genomes_fasta') {
        refIndex = genomeIds.length + 1;
      }
      else if (refType == 'ref_user_genomes_featuregroup') {
        refIndex = genomeIds.length + userGenomes.length + 1;
      }

      seqcomp_values.reference_genome_index = refIndex;

      if (values.min_seq_cov) {
        seqcomp_values.min_seq_cov = values.min_seq_cov / 100;
      }
      if (values.max_e_val) {
        seqcomp_values.max_e_val = values.max_e_val;
      }
      if (values.min_ident) {
        seqcomp_values.min_ident = values.min_ident / 100;
      }

      seqcomp_values.output_path = values.output_path;
      seqcomp_values.output_file = values.output_file;

      return seqcomp_values;
    }

  });
});
