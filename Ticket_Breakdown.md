# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.


## Your Breakdown Here

Master Ticket: Add ability to use custom Agent identifiers in generated reports.

**Ticket 1: Add custom id field for Agents**
- Criteria of acceptance:
    - Added a new field "custom_id" in the Agents table in the database.
    - Customers can add/edit "custom_id" for Agents through the UI.
- Time estimate: 4-6 hours
- Implementation details:
    - Add a new column "custom_id" to the Agents table in the database.
    - Update UI to allow customers to add/edit "custom_id" for Agents.
    - Validate that the "custom_id" field is unique for each Agent.

**Ticket 2: Update getShiftsByFacility function to include "custom_id" of Agents**
- Criteria of acceptance:
    - The `getShiftsByFacility` function returns the details of the Agents, including "custom_id".
- Time estimate: 2-3 hours
- Implementation details:
    - Update the `getShiftsByFacility` function query to include "custom_id" of Agents.
    - Update the function to include "custom_id" in the returned Shift data.

**Ticket 3: Update generateReport function to use "custom_id" instead of internal database id**
- Criteria of acceptance:
    - The `generateReport` function uses "custom_id" instead of the internal database id in generated reports.
- Time estimate: 3-4 hours
- Implementation details:
    - Update the `generateReport` function to look up Agents' "custom_id" instead of their internal id in the database.
    - Update report layout to show "custom_id" instead of internal database id.

**Ticket 4 (optional): Add ability to export data from Agents with "custom_id" to a CSV file**
- Criteria of acceptance:
    - Customers can export Agent data and their "custom_id" to a CSV file.
- Time estimate: 3-5 hours
- Implementation details:
    - Add a new export option in the UI to export Agent data and their "custom_id" to a CSV file.
    - Update the query used in the export to include "custom_id" of the Agents.