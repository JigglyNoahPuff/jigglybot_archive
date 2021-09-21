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
from functions.getAP import getAPReport


# options, uniqueJobs = getUniqueJobs()

#change to app.layout if running as single page app instead
layout = html.Div([
    dbc.Container([
            dbc.Row([
                dbc.Col(html.H1(children='Account\'s Payable Report'), className="mb-2")
            ]),
            dbc.Row([
                dbc.Col(html.H6(children='Select the filters desired from the options below.'), className="mb-4")
            ]),
            dbc.Row([
                dbc.Col([
                    html.H6('Select Companies:'),
                    dcc.Dropdown(
                                id="ap-companies-dropdown",
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
                        html.H6('Download as CSV'),
                        
                        html.Button("Download", id="ap-btn_csv", style={'background-color': 'rgba(38, 166, 91, 1)', 'border': 'none',
                                                                        'color': 'white', 'text-align': 'center', 
                                                                        'display': 'inline-block', 'font-size': '24px'}), 
                        dcc.Download(id="ap-download-csv")
                        ],
                ),
            ],
            style={'padding':'1rem'}
            ),
    ]),
    dbc.Container(
        fluid=True,
        children=[
            dash_table.DataTable(
                id='apTable',
                columns=[
                    {"name": ['Company'], "id":'Company_Code'},
                    {"name": ['Vendor'], "id":'Vendor_Code'},
                    {"name": ['Invoice Number'], "id":'Invoice_Number'},
                    {"name": ['Date'], "id": 'Date_List1'},
                    {"name": ['Invoice Amount'], "id":'Invoice_Amount'},
                    {"name": ['Payment Total'], "id":'Payment_Total'},
                    {"name": ['Balance'], "id":"Balance"},
                    ],
                merge_duplicate_headers=True,
            )
        ]
    ),
])

globalapDf = pd.DataFrame({'Empty':[]})

@app.callback(
    Output("apTable", "data"),
    [Input('ap-companies-dropdown', 'value')])
def getAPTable(companies):
    vendorsData = getAPReport()

    vendorsData = vendorsData[vendorsData['Company_Code'].isin(companies)]

    totalRow = pd.DataFrame({'Company_Code': ['Total'], 'Vendor':['-'], 'Invoice_Number':['-'], 'Invoice_Date':[datetime.datetime.now()], 
                             'Invoice_Amount': [vendorsData.Invoice_Amount.sum()],  'Payment_Total':[vendorsData.Payment_Total.sum()], 
                             'Balance': [vendorsData.Balance.sum()]})

    withTotals = pd.concat([vendorsData, totalRow], ignore_index=True)

    global globalAPDf
    globalAPDf = vendorsData.copy()

    return withTotals.to_dict('records')

@app.callback(
    Output("ap-download-csv", "data"),
    [Input("ap-btn_csv", "n_clicks")],
    prevent_initial_call=True,
)
def func(n_clicks):
    return dcc.send_data_frame(pd.DataFrame(globalAPDf).to_csv, "AccountsPayable.csv")