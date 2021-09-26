import dash_html_components as html
import dash_bootstrap_components as dbc

# needed only if running this as a single page app
#external_stylesheets = [dbc.themes.LUX]

#app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

# change to app.layout if running as single page app instead
layout = html.Div([
    dbc.Container([
        dbc.Row([
            dbc.Col(html.H1("Welcome to Western Mountain Reports", className="text-center")
                    , className="mb-5 mt-5")
        ]),
        dbc.Row([
            dbc.Col(html.H5(children='Click on a link below or use the explore option in the top right.'), 
            className="mb-5")
            ]),

        dbc.Row([
            dbc.Col(dbc.Card(children=[html.H3(children='Western Mountain Reports',
                                               className="text-center"),
                                       dbc.Row([dbc.Col(dbc.Button("Account's Receivable", href="localhost:8050/accounts_receivable",
                                                                   color="primary"),
                                                        className="mt-3"),
                                                dbc.Col(dbc.Button("Account's Payable", href="https://data.world/hxchua/covid-19-singapore",
                                                                   color="primary"),
                                                        className="mt-3")], justify="center")
                                       ],
                             body=True, color="dark", outline=True)
                    , width=4, className="mb-4"),

            dbc.Col(dbc.Card(children=[html.H3(children='Visit Buckhorn Analytics LLC\'s Website',
                                               className="text-center"),
                                       dbc.Button("buckthetrend.co",
                                                  href="https://www.buckthetrend.co",
                                                  color="primary",
                                                  className="mt-3"),

                                       ],
                             body=True, color="dark", outline=True)
                    , width=4, className="mb-4"),
        ], className="mb-5", justify='center'),

        html.A("Monitored and maintained by Buckhorn Analytics LLC.",
               href="https://www.buckthetrend.co")

    ])

])

# needed only if running this as a single page app
# if __name__ == '__main__':
#     app.run_server(host='127.0.0.1', debug=True)