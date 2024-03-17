const UserCheckIcon = {
    name: 'UserCheckIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('path', {d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),
                    render('circle', {cx: "8.5", cy: "7", r: "4"}),
                    render('polyline', {points: "17 11 19 13 23 9"})
                ]
            )
        }
    }
}

export default UserCheckIcon
