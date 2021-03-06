var QuerySchemaModel = require('../../../../../javascripts/cartodb3/data/query-schema-model');
var TableManager = require('../../../../../javascripts/cartodb3/components/table/table-manager');

describe('components/table/table-manager', function () {
  beforeEach(function () {
    this.configModel = {};
    this.modals = { create: function () {} };
    this.querySchemaModel = new QuerySchemaModel({}, {
      configModel: this.configModel
    });
  });

  describe('create', function () {
    it('should generate a TableView with rows and columns collection', function () {
      var tableView = TableManager.create({
        modals: this.modals,
        configModel: this.configModel,
        querySchemaModel: this.querySchemaModel,
        table_name: 'pacos_table'
      });

      expect(tableView).toBeDefined();
      expect(tableView._rowsCollection).toBeDefined();
      expect(tableView._columnsCollection).toBeDefined();
    });
  });
});
