// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import {ResponsivePie} from '@nivo/pie'
import {Box} from "@mui/material";
import {useColors} from "../common/theme/hooks/useMode.ts";
import {mockPieData} from "../data/mockData.ts";

interface Props {
    size: number
    isDashboard: boolean
}
function PieChart({size, isDashboard}: Props) {
    const colors = useColors()

    return <>
        {/*<Header title={'Pie Chart'} subtitle={'Discover Pie Chart'}/>*/}
        <Box height={`${size}vh`}>
            <ResponsivePie
                theme={{
                    legends:
                        {
                            text: {
                                fill: colors.grey[100]
                            }
                        },
                    tooltip: {
                        container: {
                            background: colors.grey[700]
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
                    }
                }}
                data={mockPieData}
                margin={{top: 40, right: 80, bottom: !isDashboard ? 80 : 40, left: 80}}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={colors.grey[100]}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{from: 'color'}}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={!isDashboard ? [
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ] : undefined}
            />
        </Box>
    </>
}

export default PieChart;