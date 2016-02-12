 /*------------------------------------------------------------------------
    File        : Employees
    Purpose             :
    Syntax      :
    Description :
    Author(s)   : sboucher
    Created     : Tue Nov 24 14:32:17 EST 2015
    Notes       :
  ----------------------------------------------------------------------*/

  /* ***************************  Definitions  ************************** */

  /* ********************  Preprocessor Definitions  ******************** */

  /* ***************************  Main Block  *************************** */

  /** Dynamically generated schema file **/

@openapi.openedge.entity.primarykey (fields="EmpNum").

DEFINE TEMP-TABLE ttEmployee BEFORE-TABLE bttEmployee
FIELD EmpNum AS INTEGER INITIAL "0" LABEL "Emp No"
FIELD LastName AS CHARACTER LABEL "Last Name"
FIELD FirstName AS CHARACTER LABEL "First Name"
FIELD Address AS CHARACTER LABEL "Address"
FIELD Address2 AS CHARACTER LABEL "Address2"
FIELD City AS CHARACTER LABEL "City"
FIELD State AS CHARACTER LABEL "State"
FIELD PostalCode AS CHARACTER LABEL "Postal Code"
FIELD HomePhone AS CHARACTER LABEL "Home Phone"
FIELD WorkPhone AS CHARACTER LABEL "Work Phone"
FIELD DeptCode AS CHARACTER LABEL "Dept Code"
FIELD Position AS CHARACTER LABEL "Position"
FIELD Birthdate AS DATE INITIAL "?" LABEL "Birthdate"
FIELD StartDate AS DATE INITIAL "?" LABEL "Start Date"
FIELD VacationDaysLeft AS INTEGER INITIAL "0" LABEL "Vacation Days Left"
FIELD SickDaysLeft AS INTEGER INITIAL "0" LABEL "Sick Days Left"
INDEX DeptCode  DeptCode  ASCENDING
INDEX EmpNo IS  PRIMARY  EmpNum  ASCENDING
INDEX Name LastName  ASCENDING  FirstName  ASCENDING .


DEFINE DATASET dsEmployee FOR ttEmployee.
