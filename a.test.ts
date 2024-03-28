import { Test, Assert } from "unyt-tests/testing/test.ts";

@Test export class NewAAAAbbTest {
	
	@Test([
		1,2,3
	]) 
	
	firstTest(v: number) {
		Assert.equals(1, v)
	}

}