import React from 'react';
import { Container, Drawer,List,ListItem, Typography } from '@mui/material';
import { TreeView} from '@mui/lab';
import { TreeItem } from '@mui/lab';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { makeStyles } from '@mui/styles';

const widthList="300px";


const useStyles= makeStyles({

    drawer:{
        width:widthList
    },
    appbar:{
        height:"5rem"
        
    },
    logo:{
        flexGrow:1
    },
    demo:{
        paddingLeft:"2rem"
    }
})



const Layout = () => {

    const classes=useStyles()

  return (
    <div>

    {/* app bar */}
    <Container>
    <AppBar className={classes.appbar}>
        <Toolbar>
            <Typography
                className={classes.logo}
            >
                .
            </Typography>

            <NotificationsNoneRoundedIcon/>
            <Typography>
                Notification 
            </Typography>

            <Typography
                className={classes.demo}
            >
                Danson Demo
            </Typography>
            
        </Toolbar>
    </AppBar>
    </Container>

    {/* side drawer */}
        
        <Drawer
         button        
         variant='permanent'
         anchor="left"
        >
            <Toolbar/>
            <List  className={classes.drawer}>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='1' label="Dashboard"/>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='2' label="Customer Management">
                            <TreeItem  nodeId='22' label="Customer Profile"/>
                        </TreeItem>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='3' label="Fund Management"/>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='4' label="Transaction Management">
                            <TreeItem  nodeId='44' label="Bond"/>
                            <TreeItem  nodeId='444' label="Equity"/>
                        </TreeItem>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='5' label="Company Management">
                            <TreeItem  nodeId='55' label="Company Profile" />
                            <TreeItem  nodeId='555' label="Security Profile" />
                            <TreeItem  nodeId='5555' label="Security Snap" />

                        </TreeItem>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='6' label="User Management">
                        <TreeItem  nodeId='66' label="Add Users" />
                        <TreeItem  nodeId='666' label="Users" />
                        </TreeItem>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='7' label="Region Management">
                        <TreeItem  nodeId='77' label="Country" />
                        <TreeItem  nodeId='777' label="City" />
                        </TreeItem>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='8' label="Settings">
                            <TreeItem  nodeId='88' label="Service Charge" />
                            <TreeItem  nodeId='888' label="Master Settings" />
                        </TreeItem>
                    </TreeView>
                </ListItem>
                <ListItem>
                    <TreeView>
                        <TreeItem  nodeId='9' label="Reports">
                        <TreeItem  nodeId='99' label="Transaction Report" />
                        <TreeItem  nodeId='999' label="Fund Report" />
                        </TreeItem>
                    </TreeView>
                </ListItem>
            </List>

        </Drawer>
    </div>
  )
}

export default Layout;