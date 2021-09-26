from numpy import unique
import plotly.graph_objects as go
import pandas as pd

import dash
import dash_bootstrap_components as dbc
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
import dash_bootstrap_components as dbc
import dash_table
import datetime

from app import app
from functions.getAR import getARReport, getUniqueJobs


options, uniqueJobs = getUniqueJobs()

#change to app.layout if running as single page app instead
layout = html.Div([
    dbc.Container([
            dbc.Row([
                dbc.Col(html.H1(children='Account\'s Receivable Report'), className="mb-2")
            ]),
            dbc.Row([
                dbc.Col(html.H6(children='Select the filters desired from the options below.'), className="mb-4")
            ]),
            dbc.Row([
                dbc.Col([
                    html.Div(
                        [
                            dbc.Button(
                                "Open Job Select",
                                id="ar-jobs-collapse-button",
                                className="mb-3",
                                style={"color":"white", "background-color":"rgba(38, 166, 91, 1)"},
                            ),
                            dbc.Collapse(
                                children=
                                [
                                    html.H6('Select Jobs:'),
                                    dcc.Dropdown(
                                        id="ar-jobs-dropdown",
                                        options= options,
                                        value= uniqueJobs,
                                        multi= True
                                    ), 
                                ],
                                id='ar-jobs-collapse',
                            ),
                        ]
                    )
                ]),
                dbc.Col([
                    html.H6('Select Companies:'),
                    dcc.Dropdown(
                                id="ar-companies-dropdown",
                                options=[
                                    {"label": "S2I", "value": 'S2I'},
                                    {"label": "TUD", "value": 'TUD'},
                                    {"label": "WMH", "value": 'WMH'},
                                    {"label": "WMI", "value": 'WMI'},                                    
                                ],
                                value=['S2I', 'TUD', 'WMH', 'WMI'],
                                multi= True
                                ),
                ]),
                dbc.Col([
                    html.H6('Select Invoice Types:'),
                    dcc.Dropdown(
                                id="ar-invoiceType-dropdown",
                                options=[
                                    {"label": "Posted", "value": 'Posted'},
                                    {"label": "Unposted", "value": 'Unposted'},
                                ],
                                value=['Posted', 'Unposted'],
                                multi= True
                                ),
                ]),
                dbc.Col([
                    html.H6('Select Balance Types:'),
                    dcc.Dropdown(
                                id="ar-balance-dropdown",
                                options=[
                                    {"label": "Paid", "value": 'Paid'},
                                    {"label": "Unpaid", "value": 'Unpaid'},
                                ],
                                value=['Unpaid'],
                                multi= True
                                ),
                ]),
                dbc.Col([
                        html.H6('Download as CSV'),
                        
                        html.Button("Download", id="ar-btn_csv", style={'background-color': 'rgba(38, 166, 91, 1)', 'border': 'none',
                                                                        'color': 'white', 'text-align': 'center', 
                                                                        'display': 'inline-block', 'font-size': '24px'}), 
                        dcc.Download(id="ar-download-csv")
                        ],
                        
                ),
            ],
            style={'padding':'1rem'},
            ),
    ]),
    dbc.Container(
        fluid=True,
        children=[
            dash_table.DataTable(
                id='arTable',
                columns=[
                    {"name": ['Company'], "id":'Company_Code'},
                    {"name": ['Job Number'], "id":'Job_Number'},
                    {"name": ['Job'], "id":'Job_Description'},
                    {"name": ['Invoice Number'], "id":'Invoice_Or_Transaction'},
                    {"name": ['Due Date'], "id":'Invoice_Due_Date'},
                    {"name": ['Original Balance'], "id": 'Invoice_Amount'},
                    {"name": ['Amount Paid'], "id":'Amount_Paid'},
                    {"name": ['Current Balance'], "id":'Balance'},
                    {"name": ['Retention Balance'], "id":"Retention_Balance"},
                    {"name": ['Status'], "id":"Status"},
                    {"name": ['Transaction Type'], "id":"Transaction_Type"},
                    ],
                merge_duplicate_headers=True,
            )
        ]
    ),
])

globalARDf = pd.DataFrame({'Empty':[]})

@app.callback(
    Output("arTable", "data"),
    [Input('ar-jobs-dropdown', 'value')],
    [Input('ar-companies-dropdown', 'value')],
    [Input('ar-invoiceType-dropdown', 'value')],
    [Input('ar-balance-dropdown', 'value')])
def getARTable(jobs, companies, invoiceTypes, balanceTypes):
    allItems = getARReport()

    allItems = allItems[allItems['JobNumberName'].isin(jobs)]

    allItems = allItems[allItems['Company_Code'].isin(companies)]

    allItems = allItems[allItems['Status'].isin(invoiceTypes)]

    if 'Paid' not in balanceTypes and 'Unpaid' not in balanceTypes:
        allItems = allItems[allItems['Transaction_Type'].isin([])]
    elif 'Paid' in balanceTypes and 'Unpaid' in balanceTypes:
        allItems = allItems
    elif 'Paid' in balanceTypes:
        allItems = allItems[allItems['Invoice_Amount'] == allItems['Amount_Paid']]
    elif 'Unpaid' in balanceTypes:
        allItems = allItems[allItems['Invoice_Amount'] != allItems['Amount_Paid']]

    totalRow = pd.DataFrame({'Company_Code': ['Total'], 'Job_Number':['-'], 'Job_Description':['-'], 'Invoice_Or_Transaction':['-'], 
                             'Invoice_Date':[datetime.datetime.now()], 'Invoice_Amount': [allItems.Invoice_Amount.sum()], 
                             'Invoice_Balance':[allItems.Invoice_Balance.sum()], 'Amount_Paid':[allItems.Amount_Paid.sum()], 
                             'Invoice_Due_Date':['-'], 'Retention_Balance':[allItems.Retention_Balance.sum()], 'Balance':[allItems.Balance.sum()], 
                             'Zero_Balance':['-'], 'Status':['Total'], 'Transaction_Type':['-']})

    withTotals = pd.concat([allItems, totalRow], ignore_index=True)

    global globalARDf
    globalARDf = withTotals.copy()

    return withTotals.to_dict('records')



@app.callback(
    Output("ar-jobs-collapse", "is_open"),
    [Input("ar-jobs-collapse-button", "n_clicks")],
    [State("ar-jobs-collapse", "is_open")],
)
def toggle_collapse(n, is_open):
    if n:
        return not is_open
    return is_open


@app.callback(
    Output("ar-download-csv", "data"),
    Input("ar-btn_csv", "n_clicks"),
    prevent_initial_call=True,
)
def func(n_clicks):
    return dcc.send_data_frame(pd.DataFrame(globalARDf).to_csv, "AccountsReceivable.csv")




# @app.callback(
#     Output('ar-jobs-dropdown', 'options'),
#     Input('arTable', 'data'))
# def updateJobs(tableData):
#     jobs = []
#     uniqueJobs = []

#     for row in tableData:

#         jobs.append(f"{row['Job_Number']}-{row['Job_Description']}")
    
#     for job in jobs:
#         if job not in uniqueJobs:
#             uniqueJobs.append(job)

#     options = [{'label':name, 'value':name} for name in uniqueJobs]

#     return options