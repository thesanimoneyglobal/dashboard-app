import {Box} from "@mui/material";
import {ResponsiveLine} from "@nivo/line";
import {mockLineData} from "../data/mockData.ts";
import {useColors} from "../common/theme/hooks/useMode.ts";

interface Props {
    height: number
    isDashboard: boolean
}

export default function LineChart({height, isDashboard}: Props) {
    const colors = useColors()

    return <>
        <Box height={`${height}vh`}>
            <ResponsiveLine
                theme={{
                    legends: {
                        text: {
                            fill: colors.grey[100]
                        }
                    },
                    axis: {
                        legend: {
                            text: {
                                fill: colors.grey[100]
                            }
                        }
                    },
                    text: {
                        fill: colors.grey[100]
                    },

                    tooltip: {
                        container: {
                            background: colors.grey[700],
                        }
                    }
                }}
                data={mockLineData}
                colors={{datum: 'color'}}
                curve={'cardinal'}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                enableGridX={false}
                enableGridY={false}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: !isDashboard ? 'transportation' : null,
                    legendOffset: 36,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: !isDashboard ? 'count' : null,
                    legendOffset: -40,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    </>
}