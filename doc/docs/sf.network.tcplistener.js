GNATdoc.Documentation = {
  "label": "Sf.Network.TcpListener",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "sfTcpListener_create",
          "line": 37,
          "column": 13,
          "src": "srcs/sf-network-tcplistener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 37,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_create",
                      "href": "docs/sf.network.tcplistener.html#L37C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.html#L48C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Create a new TCP listener\n"
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "A new sfTcpListener object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfTcpListener_destroy",
          "line": 45,
          "column": 14,
          "src": "srcs/sf-network-tcplistener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 45,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_destroy",
                      "href": "docs/sf.network.tcplistener.html#L45C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "listener",
                      "href": "docs/sf.network.tcplistener.html#L45C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.html#L48C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Destroy a TCP listener\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "listener",
              "line": 45,
              "column": 37,
              "type": {
                "label": "Sf.Network.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.html#L48C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "TCP listener to destroy\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfTcpListener_setBlocking",
          "line": 63,
          "column": 14,
          "src": "srcs/sf-network-tcplistener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 63,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_setBlocking",
                      "href": "docs/sf.network.tcplistener.html#L63C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "listener",
                      "href": "docs/sf.network.tcplistener.html#L63C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.html#L48C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 64,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "blocking",
                      "href": "docs/sf.network.tcplistener.html#L64C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf.html#L67C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Set the blocking state of a TCP listener\n"
                },
                {
                  "kind": "span",
                  "text": "In blocking mode, calls will not return until they have\n"
                },
                {
                  "kind": "span",
                  "text": "completed their task. For example, a call to\n"
                },
                {
                  "kind": "span",
                  "text": "sfTcpListener_accept in blocking mode won't return until\n"
                },
                {
                  "kind": "span",
                  "text": "a new connection was actually received.\n"
                },
                {
                  "kind": "span",
                  "text": "In non-blocking mode, calls will always return immediately,\n"
                },
                {
                  "kind": "span",
                  "text": "using the return code to signal whether there was data\n"
                },
                {
                  "kind": "span",
                  "text": "available or not.\n"
                },
                {
                  "kind": "span",
                  "text": "By default, all sockets are blocking.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "listener",
              "line": 63,
              "column": 41,
              "type": {
                "label": "Sf.Network.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.html#L48C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "TCP listener object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "blocking",
              "line": 64,
              "column": 41,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf.html#L67C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to set the socket as blocking, sfFalse for non-blocking\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfTcpListener_isBlocking",
          "line": 74,
          "column": 13,
          "src": "srcs/sf-network-tcplistener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 74,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_isBlocking",
                      "href": "docs/sf.network.tcplistener.html#L74C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "listener",
                      "href": "docs/sf.network.tcplistener.html#L74C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.html#L48C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 75,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf.html#L67C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Tell whether a TCP listener is in blocking or non-blocking mode\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "listener",
              "line": 74,
              "column": 39,
              "type": {
                "label": "Sf.Network.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.html#L48C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "TCP listener object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "sfTrue if the socket is blocking, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfTcpListener_getLocalPort",
          "line": 88,
          "column": 13,
          "src": "srcs/sf-network-tcplistener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 88,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_getLocalPort",
                      "href": "docs/sf.network.tcplistener.html#L88C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "listener",
                      "href": "docs/sf.network.tcplistener.html#L88C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.html#L48C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 89,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint16",
                      "href": "docs/sf.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Get the port to which a TCP listener is bound locally\n"
                },
                {
                  "kind": "span",
                  "text": "If the socket is not listening to a port, this function\n"
                },
                {
                  "kind": "span",
                  "text": "returns 0.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "listener",
              "line": 88,
              "column": 41,
              "type": {
                "label": "Sf.Network.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.html#L48C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "TCP listener object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Port to which the TCP listener is bound\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfTcpListener_listen",
          "line": 108,
          "column": 13,
          "src": "srcs/sf-network-tcplistener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 108,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_listen",
                      "href": "docs/sf.network.tcplistener.html#L108C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 109,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "listener",
                      "href": "docs/sf.network.tcplistener.html#L109C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.html#L48C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 110,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "port",
                      "href": "docs/sf.network.tcplistener.html#L110C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint16",
                      "href": "docs/sf.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 111,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "address",
                      "href": "docs/sf.network.tcplistener.html#L111C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Network.IpAddress.sfIpAddress",
                      "href": "docs/sf.network.ipaddress.html#L36C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 112,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Network.SocketStatus.sfSocketStatus",
                      "href": "docs/sf.network.socketstatus.html#L34C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Start listening for connections\n"
                },
                {
                  "kind": "span",
                  "text": "This functions makes the socket listen to the specified\n"
                },
                {
                  "kind": "span",
                  "text": "port, waiting for new connections.\n"
                },
                {
                  "kind": "span",
                  "text": "If the socket was previously listening to another port,\n"
                },
                {
                  "kind": "span",
                  "text": "it will be stopped first and bound to the new port.\n"
                },
                {
                  "kind": "span",
                  "text": "If there is no specific address to listen to, pass sfIpAddress_Any\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "listener",
              "line": 109,
              "column": 7,
              "type": {
                "label": "Sf.Network.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.html#L48C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "TCP listener object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "port",
              "line": 110,
              "column": 7,
              "type": {
                "label": "Sf.sfUint16",
                "docHref": "docs/sf.html#L96C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Port to listen for new connections\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "address",
              "line": 111,
              "column": 7,
              "type": {
                "label": "Sf.Network.IpAddress.sfIpAddress",
                "docHref": "docs/sf.network.ipaddress.html#L36C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Address of the interface to listen on\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Status code\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfTcpListener_accept",
          "line": 130,
          "column": 13,
          "src": "srcs/sf-network-tcplistener.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 130,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_accept",
                      "href": "docs/sf.network.tcplistener.html#L130C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "listener",
                      "href": "docs/sf.network.tcplistener.html#L130C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpListener_Ptr",
                      "href": "docs/sf.network.html#L48C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 131,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                  "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "connected",
                      "href": "docs/sf.network.tcplistener.html#L131C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfTcpSocket_Ptr",
                      "href": "docs/sf.network.html#L50C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 132,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Network.SocketStatus.sfSocketStatus",
                      "href": "docs/sf.network.socketstatus.html#L34C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": "Accept a new connection\n"
                },
                {
                  "kind": "span",
                  "text": "If the socket is in blocking mode, this function will\n"
                },
                {
                  "kind": "span",
                  "text": "not return until a connection is actually received.\n"
                },
                {
                  "kind": "span",
                  "text": "The@aconnected argument points to a valid sfTcpSocket pointer\n"
                },
                {
                  "kind": "span",
                  "text": "in case of success (the function returns sfSocketDone), it points\n"
                },
                {
                  "kind": "span",
                  "text": "to a NULL pointer otherwise.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "listener",
              "line": 130,
              "column": 35,
              "type": {
                "label": "Sf.Network.sfTcpListener_Ptr",
                "docHref": "docs/sf.network.html#L48C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "TCP listener object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "connected",
              "line": 131,
              "column": 35,
              "type": {
                "label": "Sf.Network.sfTcpSocket_Ptr",
                "docHref": "docs/sf.network.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Socket that will hold the new connection\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Status code\n"
                  }
                ]
              }
            ]
          }
        }
      ],
      "label": "Subprograms"
    }
  ]
};