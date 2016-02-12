
 /*------------------------------------------------------------------------
    File        : Employees-CRUD
    Syntax      :
    Author(s)   : sboucher
    Created     : Tue Nov 24 11:53:57 EST 2015
    Notes       :
  ----------------------------------------------------------------------*/

@program FILE(name="Employees-CRUD.cls", module="AppServer").
@openapi.openedge.export FILE(type="REST", executionMode="singleton", useReturnValue="false", writeDataSetBeforeImage="false").
@progress.service.resource FILE(name="Employees-CRUD", URI="/Employees-CRUD", schemaName="dsEmployee", schemaFile="EmployeeCRUD/AppServer/employees-crud.i").

USING Progress.Lang.*.
USING OpenEdge.BusinessLogic.BusinessEntity.

BLOCK-LEVEL ON ERROR UNDO, THROW.

CLASS Employees-CRUD INHERITS BusinessEntity:
    /*------------------------------------------------------------------------------
            Purpose:
            Notes:
    ------------------------------------------------------------------------------*/

    {"employees-crud.i"}

    DEFINE DATA-SOURCE srcEmployee FOR sports2000.Employee.


    /*------------------------------------------------------------------------------
            Purpose:
            Notes:
    ------------------------------------------------------------------------------*/
    CONSTRUCTOR PUBLIC Employees-CRUD():

        DEFINE VAR hDataSourceArray AS HANDLE NO-UNDO EXTENT 1.
        DEFINE VAR cSkipListArray AS CHAR NO-UNDO EXTENT 1.

        SUPER (DATASET dsEmployee:HANDLE).

        /* Data Source for each table in dataset. Should be in table order as defined
           in DataSet */
        hDataSourceArray[1] =  DATA-SOURCE srcEmployee:HANDLE.

        /* Skip-list entry for each table in dataset. Should be in temp-table order
           as defined in DataSet */
        /* Each skip-list entry is a comma-separated list of field names, to be
           ignored in create stmt */

        cSkipListArray[1] = "EmpNum".

        THIS-OBJECT:ProDataSource = hDataSourceArray.
        THIS-OBJECT:SkipList = cSkipListArray.

    END CONSTRUCTOR.

    /*------------------------------------------------------------------------------
            Purpose:  Get one or more records, based on a filter string
            Notes:
    ------------------------------------------------------------------------------*/
    @openapi.openedge.export(type="REST", useReturnValue="false", writeDataSetBeforeImage="true").
    @progress.service.resourceMapping(type="REST", operation="read", URI="?filter=~{filter~}", alias="", mediaType="application/json").
    METHOD PUBLIC VOID ReadEmployees-CRUD(
            INPUT filter AS CHARACTER,
            OUTPUT DATASET dsEmployee):

        SUPER:ReadData(filter).

    END METHOD.

    /*------------------------------------------------------------------------------
            Purpose: Create one or more new records
            Notes:
    ------------------------------------------------------------------------------*/
    @openapi.openedge.export(type="REST", useReturnValue="false", writeDataSetBeforeImage="true").
    @progress.service.resourceMapping(type="REST", operation="create", URI="", alias="", mediaType="application/json").
    METHOD PUBLIC VOID CreateEmployees-CRUD(INPUT-OUTPUT DATASET dsEmployee):

        SUPER:CreateData(DATASET dsEmployee BY-REFERENCE).
    END METHOD.

    /*------------------------------------------------------------------------------
            Purpose:  Update one or more records
            Notes:
    ------------------------------------------------------------------------------*/
    @openapi.openedge.export(type="REST", useReturnValue="false", writeDataSetBeforeImage="true").
    @progress.service.resourceMapping(type="REST", operation="update", URI="", alias="", mediaType="application/json").
    METHOD PUBLIC VOID UpdateEmployees-CRUD(INPUT-OUTPUT DATASET dsEmployee):

        SUPER:UpdateData(DATASET dsEmployee BY-REFERENCE).
    END METHOD.

    /*------------------------------------------------------------------------------
            Purpose:    Delete a record
            Notes:
    ------------------------------------------------------------------------------*/
    @openapi.openedge.export(type="REST", useReturnValue="false", writeDataSetBeforeImage="true").
    @progress.service.resourceMapping(type="REST", operation="delete", URI="", alias="", mediaType="application/json").
    METHOD PUBLIC VOID DeleteEmployees-CRUD(INPUT-OUTPUT DATASET dsEmployee):

        SUPER:DeleteData(DATASET dsEmployee BY-REFERENCE).
    END METHOD.


END CLASS.
