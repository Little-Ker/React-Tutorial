import React from "react"

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

function TimelineTest() {
    return (
        <div>
            <Timeline position="right">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined"><SportsEsportsIcon /></TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>A</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary"><LaptopMacIcon /></TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>B</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default TimelineTest