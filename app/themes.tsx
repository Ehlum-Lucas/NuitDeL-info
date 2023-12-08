'use client'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function themes() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["thèmes"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="Bretagne">Bretagne</DropdownItem>
                <DropdownItem key="Apéro">Apéro</DropdownItem>
                <DropdownItem key="Urbanisation">Urbanisation</DropdownItem>
                <DropdownItem key="Immigration">Immigration</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
